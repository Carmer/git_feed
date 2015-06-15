Rails.application.routes.draw do
  root to: "users#show"

  get "/login", to: "sessions#new"

  get "/auth/github/callback", to: "sessions#create"

  get "/user", to: "users#show", as: :user
end
