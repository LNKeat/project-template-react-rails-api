Rails.application.routes.draw do
  resources :reservations
  # resources :reservations, only: [:id, :camper_id, :campsite_id]
  resources :campsites
  resources :campers
end
