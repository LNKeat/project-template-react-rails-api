Rails.application.routes.draw do
  resources :reservations
  resources :campsites, only: [:create, :index]
  resources :campers

  post "/signup", to: "campers#create"
end
