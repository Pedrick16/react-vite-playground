import {BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes"
import Navbar from "./shared/components/partials/navbar"
import './app.css'

function App() {

  return (
    <div className="app-container">  
      <Router>
      <Navbar />
      <AppRoutes />
      </Router>
    </div>

    
  )
}

export default App
