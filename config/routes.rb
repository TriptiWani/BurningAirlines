Rails.application.routes.draw do

  root :to => 'session#new'
  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

  get '/search' => 'pages#search' , :as => 'search_flights'
  get '/contact' => 'pages#contact' , :as => 'contact_us'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
