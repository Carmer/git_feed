Rails.application.routes.draw do
  root to: "users#show"

  get "/login", to: "sessions#new", as: :login

  get "/auth/github/callback", to: "sessions#create"

  get "/user", to: "users#show", as: :user
end
