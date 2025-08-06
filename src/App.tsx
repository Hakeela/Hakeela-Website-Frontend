import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/home_page"
import About from "./pages/about";
import Blog from "./pages/blog";
import LandingPage from "./pages/landing_page";
import SignUp from "./pages/HMP/signup";
import HDxConsulting from "./pages/hdxconsulting";


const App = () => {
  return (
      <Routes>
        <Route index element={<LandingPage/>}/>
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/hdxconsulting" element={<HDxConsulting/>}/>
          </Route>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
  )
}

export default App