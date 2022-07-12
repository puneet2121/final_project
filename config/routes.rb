Rails.application.routes.draw do
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :house, only: [:show, :index]

  namespace :api do
    namespace :v1 do
       resources :houses, param: :id
       resources :users, param: :id
    end
  end

  match '*path', to: 'home#index', via: :all


end
