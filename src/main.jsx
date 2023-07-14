import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './Context/FilterContext.jsx'
import { SearchProvider } from './Context/SearchContext.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
