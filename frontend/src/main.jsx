import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Toaster } from "@/components/ui/toaster"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
        <Toaster className=" font-inter text-black" />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)

//mongodb+srv://lovetocode108:<password>@cluster0.lfwk6rq.mongodb.net/
