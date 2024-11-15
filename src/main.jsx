import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './Components/Form.jsx'
import Component from './Components/Component.jsx'


const user = "siddhant";
createRoot(document.getElementById('root')).render(

   <div>
    
  <App />
   </div>
)
