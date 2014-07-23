Rails.application.routes.draw do

  resources :to_dos

  root 'home#index'

end
