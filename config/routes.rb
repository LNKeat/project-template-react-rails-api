Rails.application.routes.draw do
  resources :reservations
  resources :campsites, only: [:create, :index]
  resources :campers

  post "/signup", to: "campers#create"
  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

end
