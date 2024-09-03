import React, { useState } from "react";
import "./sidebar.scss";
import logo from "../../assets/all-img/Logo-02-removebg-preview.png";
import profile from "../../assets/profile/comment_2.png";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar= ({ sidebarData }) => {
  const [isClose, setIsClose] = useState(false);
  const {pathname} =useLocation();
  const paths=pathname.split("/")
  const path=paths[paths.length-1];
  return (
    <div className={`sidebar-upper ${isClose ? "side-open" : ""}`}>
      <div className="sidebar">
        <div className="text-white my-5 pb-5 flex-column gap-4 d-flex justify-content-center">
        <div className="me-auto position-relative d-flex align-items-center flex-column justify-content-center">
          {/* {!isClose && ( */}
            <div className={`w-75 mx-auto text-center mb-2`}>
              <img className="w-100 h-100 " src={logo} alt="" />
            </div>
          {/* )} */}
          {/* <MdMenu
            onClick={() => setIsClose(!isClose)}
            className={isClose?"side-closer more":"side-closer"}
            size={30}
          /> */}
          <small className="side">Admin Dashboard</small>
        </div>
        <div className="d-flex  gap-3 mx-auto">
          <div className="profile-img">
            <img src={profile} className="w-100 h-100 rounded-circle" alt="profile" />
          </div>
          <div className="d-flex flex-column justify-content">
            <p className="m-0 p-0 text-light-gray "> ALESSANDRO SANTERO</p>
            <Link to="" style={{fontSize:"14px"}} className=" text-gray fw-semibold"><span> Edit profile</span></Link>
          </div>
          </div>
        </div>
        <ul className="sidebar-list px-0">
          {sidebarData?.map((val, index) => (
            <NavLink key={index}
              to={val.path}
              className={({ isActive }) =>
                (isActive ? "active" : "") + " text-decoration-none"
              }
            >
              <li >
                <span>{val?.icon}</span>
                {!isClose && (
                  <>
                    <span className={`text-${val?.path!==path?"gray":""}  position-relative`}>{val?.name} {val?.soon&&<span style={{fontSize:"11px",}} className="bg-secondary ms-1 rounded-5 text-white px-2 position-absolute py-1">SOON</span>}</span>
                    <span className={`ms-auto  active-icon`}>
                      {/* <FaAngleRight /> */}
                    </span>
                  </>
                )}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
