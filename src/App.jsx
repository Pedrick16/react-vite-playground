import {BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes"
import Navbar from "./shared/components/partials/navbar"

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <AppRoutes />
      </Router>
    </>

    
  )
}

export default App
