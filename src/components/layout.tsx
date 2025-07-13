import Navbar from "./navbar"
import Footer from "./footer"
import {Outlet} from "react-router-dom"
import "./styles/layout.css"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-main">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default Layout