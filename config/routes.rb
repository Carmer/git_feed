Rails.application.routes.draw do
  root to: "users#show"

  get "/login", to: "sessions#new", as: :login

  get "/auth/github/callback", to: "sessions#create"

  resources :users, only: [:show]
end
