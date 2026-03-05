
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);
