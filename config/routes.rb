Rails.application.routes.draw do
  root to: "users#show"

  get "/login", to: "sessions#new", as: :login

  get "/auth/github/callback", to: "sessions#create"

  resources :users, only: [:show] do
    member do
      get "/events", to: 'users#events', as: :events
      get "/received_events", to: 'users#received_events', as: :received_events
      get "/commits", to: 'users#commits', as: :commits
    end
  end

  require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
end
