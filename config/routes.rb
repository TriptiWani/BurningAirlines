Rails.application.routes.draw do

  root :to => 'pages#search'
  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

end
