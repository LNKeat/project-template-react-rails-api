Rails.application.routes.draw do
  resources :reservations
  resources :campsites, only: [:create, :index, :destroy]
  resources :campers, only: [:create, :index, :show]

  get "/me", to: "campers#show"
  post "/signup", to: "campers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/admin-form", to: "admin_form#index"
  post "/admin-form", to: "admin_form#create"
  delete "/admin-form/:id", to: "admin_form#destroy"

end
