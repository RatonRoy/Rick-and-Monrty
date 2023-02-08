import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './fonts/TTTravels-Regular.ttf'
import './fonts/TTTravels-Bold.ttf'
import './fonts/TTTravels-Medium.ttf'
import './fonts/TTTravels-ExtraBold.ttf'
import './fonts/TTTravels-Black.ttf'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* The rest of your app goes here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
