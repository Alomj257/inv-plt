import React, { useEffect, useState } from "react";
import "./dealPop.scss";
import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../../utils/authenticationHelper";
import { Server } from "../../../service/axios";
import { currencyFormatter } from "../../../utils/formater/dateTimeFormater";
import { calculateIrrSingleInvestment } from "../../../utils/calculations/calculateIrrSingleInvestment";

const DealListpop = ({ setIsNew,company, deals }) => {
  const navigate=useNavigate();
  const user= getAuth()?.user;  
  console.log(deals)
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
              <th scope="col text-uppercase ">ASSET ClASS </th>
              <th scope="col text-uppercase ">SECTOR</th>
              <th scope="col text-uppercase "> INVESTMENT 
              DATE</th>
              <th scope="col text-uppercase "> INVESTMENT</th>
              <th scope="col text-uppercase ">NET PROFIT(LOSS)</th>
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
                <td>{company?.dealSummary?.sector}</td>
                <td>{val?.investedDate}</td>
                <td> { currencyFormatter(val?.investors&&val?.investors?.find(v=>v.investerId===user?._id)?.amount)}</td>
                <td>{company?.dealSummary?.profite}</td>
                <td>{val?.moic}</td>
                <td><IrrVal initialInvestment={val?.investors&&val?.investors?.find(v=>v.investerId===user?._id)?.amount} investmentDate={val?.investedDate}  currentValue={val?.currentValue}/></td>
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


const IrrVal = ({ initialInvestment, investmentDate, currentValue }) => {
  // console.log(initialInvestment, investmentDate, currentValue);
  const [irr, setirr] = useState(0);
  useEffect(() => {
    setirr(
      calculateIrrSingleInvestment(
        parseInt(initialInvestment || 0),
        new Date(investmentDate),
        parseInt(currentValue || 0),
        new Date()
      )
    );
  }, [initialInvestment, investmentDate, currentValue]);

  return <> {irr}</>;
};