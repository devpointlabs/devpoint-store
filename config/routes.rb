Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :categories do
      resources :items
    end
    
    resources :items do
      resources :item_variants
    end
    
    
  
      get 'allItemV', to: 'item_variants#allItemV'
    
    
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
