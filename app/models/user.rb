class User < ActiveRecord::Base
  has_many :reservations
  has_and_belongs_to_many :flights
end
