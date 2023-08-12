import { Route,Routes} from "react-router-dom"
import HomePage from "./pages/homePage"
import AboutPage from "./pages/aboutPage"
import ContactPage from "./pages/contactPage"
import ReducerPage from "./pages/ReducerPage"
import TodoPage from "./pages/TodoPage"

function AppRoutes() {
  return (
  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/reducer" element={<ReducerPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>

  )
}

export default AppRoutes