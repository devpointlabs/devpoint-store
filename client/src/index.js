import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import { ProductProvider } from './providers/ProductProvider'
import { initMiddleware } from 'devise-axios'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './index.css';

initMiddleware()

ReactDOM.render(
  <ProductProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    </ProductProvider>,
  document.getElementById('root')
)
