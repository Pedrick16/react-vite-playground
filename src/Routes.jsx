import { Route,Routes} from "react-router-dom"
import HomePage from "./pages/homePage"
import AboutPage from "./pages/aboutPage"
import ContactPage from "./pages/contactPage"

function AppRoutes() {
  return (
  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>

  )
}

export default AppRoutes