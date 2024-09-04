import React from "react";
import "./dealPop.scss";
import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../../utils/authenticationHelper";
import { Server } from "../../../service/axios";

const DealListpop = ({ setIsNew,company, deals }) => {
  const navigate=useNavigate();
  const user= getAuth()?.user;  
  return (
    <div className="pop">
      <div className="pop-body col-md-10">
        <div className="text-end">
          <BsX
            onClick={() => setIsNew((pre) => !pre)}
            className="cursor-pointer"
            size={30}
          />
        </div>
        <div className="">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col text-uppercase "> </th>
              <th scope="col text-uppercase "> DEAL NAME</th>
              <th scope="col text-uppercase ">Asset className</th>
              <th scope="col text-uppercase ">SECTOR</th>
              <th scope="col text-uppercase "> INVESTMENT 
              DATE</th>
              <th scope="col text-uppercase "> INVESTMENT</th>
              <th scope="col text-uppercase ">Net Profit(Loss)</th>
              <th scope="col text-uppercase ">NET MOIC</th>
              <th scope="col text-uppercase ">NET IRR </th>
              <th scope="col text-uppercase ">WEIGHT </th>
            </tr>
          </thead>
          <tbody>
            {deals?.map((val, key) => (
              <tr key={key} className="p-3 " onClick={()=>navigate("about",{state:company?._id})}>
                <td>
                <div className=' ' style={{width:'50px',aspectRatio:"1/1"}}>  <img className='w-100 h-100 rounded-circle' src={Server+company?.profile||company?.img} alt="" /></div>
                </td>
                <td className="text-capitalize">{company?.name}</td>
                <td>{company?.dealSummary?.asset}</td>
                <td>{company?.dealSummary?.profitLoss}</td>
                <td>{val?.investedDate}</td>
                <td>{val?.investors&&val?.investors?.find(v=>v.investerId===user?._id).amount}</td>
                <td>{company?.dealSummary?.sector}</td>
                <td>{val?.moic}</td>
                <td>{val?.irr}</td>
                <td>{val?.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       
      </div>
    </div>
  );
};

export default DealListpop;

const data=[
    {logo:"",name:"SpaceX",asset:"Equity",sector:" 29/08/24",investDate:' 29/04/24',invest:" £500, 000",profit:" £400, 000",moic:" 0.7%",irr:"0.7%",weight:"0.7%"},
    {logo:"",name:"SpaceX",asset:"Equity",sector:" 29/08/24",investDate:' 29/04/24',invest:" £500, 000",profit:" £400, 000",moic:" 0.7%",irr:"0.7%",weight:"0.7%"},
    {logo:"",name:"SpaceX",asset:"Equity",sector:" 29/08/24",investDate:' 29/04/24',invest:" £500, 000",profit:" £400, 000",moic:" 0.7%",irr:"0.7%",weight:"0.7%"},
    {logo:"",name:"SpaceX",asset:"Equity",sector:" 29/08/24",investDate:' 29/04/24',invest:" £500, 000",profit:" £400, 000",moic:" 0.7%",irr:"0.7%",weight:"0.7%"},
    {logo:"",name:"SpaceX",asset:"Equity",sector:" 29/08/24",investDate:' 29/04/24',invest:" £500, 000",profit:" £400, 000",moic:" 0.7%",irr:"0.7%",weight:"0.7%"},
]