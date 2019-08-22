Rails.application.routes.draw do
  root to: "todos#index"
  devise_for :users
  resources :todos
end
