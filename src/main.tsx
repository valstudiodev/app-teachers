import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/index.scss'
import App from "@/App";


const appContainer = document.getElementById('root') as HTMLDivElement
if (!appContainer) {
  throw new Error("App container is not found");
}

createRoot(appContainer).render(<App />)