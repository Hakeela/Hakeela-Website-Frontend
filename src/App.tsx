import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/home_page"
import About from "./pages/about";
import Blog from "./pages/blog";
import LandingPage from "./pages/landing_page";
import SignUp from "./pages/HMP/signup";
import HDxConsulting from "./pages/hdxconsulting";
import MarginPortal from "./pages/HMP/marginportal";
import Login from "./pages/HMP/login";
import ResetPassword from "./pages/HMP/resetpassword";
import { AuthProvider } from "./components/AuthProvider";
import Dashboard from "./pages/HMP/dashboard";


const App = () => {
  return (
      <AuthProvider>
        <Routes>
          <Route index element={<LandingPage/>}/>
            <Route element={<Layout/>}>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/hdxconsulting" element={<HDxConsulting/>}/>
            </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/marginportal" element={<MarginPortal/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </AuthProvider>
  )
}

export default App