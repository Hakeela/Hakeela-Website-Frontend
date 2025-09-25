import { Sidebar } from "./sidebar"
import { Navbar } from "./newnav"
import "./styles/newlayout.css"
import React from "react"
import { Outlet } from "react-router-dom"


const NewLayout: React.FC = () => {
  const [activePage, setActivePage] = React.useState("Dashboard")

  return (
    <div className="layout">
      <Sidebar className="sidebar" activePage={activePage} onPageChange={setActivePage} />
      <div className="main">
        <Navbar currentPage={activePage} className="navbar" />
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </div>


  )
}

export default NewLayout
