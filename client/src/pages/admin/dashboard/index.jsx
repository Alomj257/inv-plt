import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/profile/comment_2.png";
import { deleteAuthService, getAllUsersService } from "../../../service/auth/AuthService";

const Dashboard = () => {
  const navigate = useNavigate();
  const [members,setMembers]=useState([]);

  const handle=async()=>{
    const mem=await getAllUsersService();
    setMembers(mem)
  }
  useEffect(()=>{
    handle();
  },[])
  console.log(members)
const handleDelete=async(id)=>{
 await deleteAuthService(id);
 handle();
}

  return (
    <div className="bg-white admin-dashboard h-100 ">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Member's Name</th>
            <th scope="col">Email</th>
            <th scope="col">TOTAL INVESTMENT</th>
            <th scope="col"> TOTAL AMOUNT </th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {members&&members?.map((val, key) => (
            <tr key={key}>
              <td style={{ width: "60px", aspectRatio: "1/1" }}>
                <img className="w-100 h-100" src={val?.img || img} alt="" />
              </td>
              <td>{val?.personal?.firstName} {val?.personal?.lastName}</td>
              <td>{val?.account?.email}</td>
              <td>{val?.investment}</td>
              <td>{val?.amount}</td>
              <td className="d-flex gap-3">
                <button
                  onClick={() => navigate("personal-details",{state:val?._id})}
                  className="btn text-primary bg-very-light-gray rounded-circle"
                >
                  <FaEye size={20} />
                </button>
                <button onClick={()=>handleDelete(val?._id)} className="btn bg-gray bg-very-light-gray rounded-circle text-gray">
                  <FaTrash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

const data = [
  { img: "", name: "THOMAS DOMINGUE", email: "domimaaw@gmail.com" },
  { img: "", name: "THOMAS DOMINGUE", email: "domimaaw@gmail.com" },
  { img: "", name: "THOMAS DOMINGUE", email: "domimaaw@gmail.com" },
  { img: "", name: "THOMAS DOMINGUE", email: "domimaaw@gmail.com" },
];
