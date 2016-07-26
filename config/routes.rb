Rails.application.routes.draw do

  root :to => 'pages#search'
  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

  get '/contact' => 'pages#contact' , :as => 'contact_us'
end
