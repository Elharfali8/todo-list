import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todoState', JSON.stringify(state.todo)); // Adjust 'todo' to match your slice name if different
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
