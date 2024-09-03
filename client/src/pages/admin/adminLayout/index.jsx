import React from 'react'
import "./adminLayout.scss"
import Sidebar from '../../../common/sidebar'
import Header from '../../../common/header'
import { Outlet } from 'react-router-dom'
import {  MdHome } from 'react-icons/md'
import { FaBriefcase } from 'react-icons/fa'

const AdminLayout = () => {
  return (
    <>
      <div className="admin-layout">
      <Sidebar sidebarData={sidebarData} />
      <div className="main-part">
        <Header role="admin" />
        <div className="admin-pages h-100 mt-3">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminLayout;

const sidebarData=[
  {
    icon: <MdHome />,
    name: "Members",
    path: "member",
  },
  {
    icon: <FaBriefcase /> ,
    name: "Companies",
    path: "companies",
  },
]