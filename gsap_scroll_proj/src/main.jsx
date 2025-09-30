import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from './App.jsx'
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother); // ✅ register globally

function RootWrapper() {
  useEffect(() => {
    // init smooth scroll globally
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // adjust for smoother/slower scroll
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <App />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RootWrapper />
  </StrictMode>
)