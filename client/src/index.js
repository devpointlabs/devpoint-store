import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import { ProductProvider } from './providers/ProductProvider'
import { initMiddleware } from 'devise-axios'
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
=======
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './index.css';
>>>>>>> 8fcff7d1eb1d2cdebf59b3b6f410dc381f3aa5ce

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
