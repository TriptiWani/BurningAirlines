Rails.application.routes.draw do


  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

end
