Rails.application.routes.draw do
  root 'application#index'

  get '/keyboard' => 'application#index'
end
