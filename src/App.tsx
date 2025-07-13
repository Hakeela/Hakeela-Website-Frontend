import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import LandinPage from "./pages/landing_page"
import About from "./pages/about";


const App = () => {
  return (
      <Routes>
          <Route element={<Layout/>}>
            <Route index element={<LandinPage/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
      </Routes>
  )
}

export default App