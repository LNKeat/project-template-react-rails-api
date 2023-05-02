Rails.application.routes.draw do
  resources :reservations
  resources :campsites
  resources :campers
end
