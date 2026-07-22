import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NeonText from './components/neonText/NeonText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-2">
      <h1 className="font-[Geom] text-8xl md:text-[9rem] lg:text-[12rem]"><NeonText color="#8f2afb">404</NeonText></h1>
      <span className="font-[Geom] text-base text-lg md:text-xl lg:text-2xl font-medium text-gray-700">Mom, it happened again...!</span>
      <a className="font-[Geom] text-base text-sm md:text-sm lg:text-lg font-medium text-blue-600 hover:underline" href="/">Back to home</a>
    </div>
  </StrictMode>,
)
