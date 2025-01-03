import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// Steps to implement redux toolkit into our project:
// Step 1: Create Store 
// Step 2: Wrapping of App componnet under Provider
// Step 3: Creation of Slice
// Step 4: Register of reducer in Store  
// Ref : https://redux.js.org/tutorials/quick-start
