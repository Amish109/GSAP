import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from './App.jsx'

gsap.registerPlugin(ScrollTrigger); // ✅ register globally

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <App />
    </div>
  </StrictMode>,
)