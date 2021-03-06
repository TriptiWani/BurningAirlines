class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]
  before_filter :authorize, only:[:new, :create, :edit, :update, :destroy]
  before_filter :authorize_user
  # before_action :authorize

  # GET /flights
  # GET /flights.json
  def index
    if (params[:from].present?&&params[:to].present?)
     @flights = Flight.where(from:params[:from], to:params[:to])
   else
     @flights = Flight.all.order('date ASC')
   end
  end

  # GET /flights/1
  # GET /flights/1.json
  def show
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save
        format.html { redirect_to flights_path, notice: 'Flight was successfully created.' }
        format.json { render :show, status: :created, location: @flight }
      else
        format.html { render :new }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end

  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:number, :origin, :destination, :date,:airplane_id)
    end

    def authorize
      flash[:alert] = 'Admin access only. Please login in as an Admin' unless @current_user.isAdmin?
      redirect_to root_path unless @current_user.isAdmin?
    end

    def authorize_user
      flash[:alert] = 'Please login' unless @current_user.present?
      redirect_to root_path unless @current_user.present?
    end
end
