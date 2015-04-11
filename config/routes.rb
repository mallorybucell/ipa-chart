Rails.application.routes.draw do
  root 'application#index'

  get '/keyboard' => 'keyboards#index'
  get '/vowelBackground' => 'keyboards#vowel_back'
end
