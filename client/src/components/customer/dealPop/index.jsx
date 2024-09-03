import React from "react";
import "./dealPop.scss";
import { BsX } from "react-icons/bs";
import img from "../../../assets/all-img/investment.png"
import { useNavigate } from "react-router-dom";

const DealListpop = ({ setIsNew }) => {
  const navigate=useNavigate();
  
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
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col text-uppercase "> </th>
              <th scope="col text-uppercase "> DEAL NAME</th>
              <th scope="col text-uppercase ">Asset CLASS</th>
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
            {data?.map((val, key) => (
              <tr key={key} className="p-3 " onClick={()=>navigate("about")}>
                <td>
                 <div className='bg-dark text-white rounded-circle' style={{width:"70px",aspectRatio:"1/1"}}> <img className='w-100 h-100 p-3' src={val?.img||img} alt="" /></div>
                </td>
                <td>{val?.name}</td>
                <td>{val?.asset}</td>
                <td>{val?.sector}</td>
                <td>{val?.investDate}</td>
                <td>{val?.invest}</td>
                <td>{val?.profit}</td>
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