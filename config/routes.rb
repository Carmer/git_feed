Rails.application.routes.draw do
  root to: "users#show"

  get "/login", to: "sessions#new", as: :login
  get "/logout", to: "sessions#destroy", as: :logout

  get "/auth/github/callback", to: "sessions#create"

  resources :users, only: [:show] do
    member do
      get "/events", to: 'users#events', as: :events
      get "/received_events", to: 'users#received_events', as: :received_events
      get "/commits", to: 'users#commits', as: :commits
    end
  end

  get "/public-feed", to: 'users#public'

  require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
end
