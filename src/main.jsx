import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from './Components/Detail.jsx'
import Layout from './Components/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="detail/:date" element={<DetailView />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
