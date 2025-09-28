import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/home_page"
import About from "./pages/about";
import Blog from "./pages/blog";
import SignUp from "./pages/HMP/signup";
import HDxConsulting from "./pages/hdxconsulting";
import MarginPortal from "./pages/HMP/marginportal";
import Login from "./pages/HMP/login";
import ResetPassword from "./pages/HMP/resetpassword";
import { AuthProvider } from "./components/AuthProvider";
import Dashboard from "./pages/HMP/dashboard";
import NewLayout from "./components/newlayout";
import Courses from "./pages/HMP/courses";
import Certififcates from "./pages/HMP/certificates";
import Portfolio from "./pages/HMP/portfolio";
import Profile from "./pages/HMP/profile";
import Imabong from "./pages/imabong";


const App = () => {
  return (
      <AuthProvider>
        <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/hdxconsulting" element={<HDxConsulting/>}/>
            </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/imabong" element={<Imabong/>}/>
          <Route path="/marginportal" element={<MarginPortal/>}/>
          <Route element={<NewLayout/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/certificates" element={<Certififcates/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>  
        </Routes>
      </AuthProvider>
  )
}

export default App