import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import { initMiddleware } from 'devise-axios'
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
=======
import 'semantic-ui-css/semantic.min.css'
>>>>>>> 23b3185457fe613244939b392b32514b3d154d0e

initMiddleware()

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
)
