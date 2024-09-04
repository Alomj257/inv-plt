import React, { useEffect, useState } from 'react'
import "./companies.scss"
import logo1 from "../../../assets/all-img/return-on-investment.png"
import { FaEye } from 'react-icons/fa'
import AddDealPop from '../../../components/admin/companies/createDealPop'
import { useNavigate } from 'react-router-dom'
import { getAllCompanyService } from '../../../service/company/companyService'
import { Server } from '../../../service/axios'

const Companies = () => {
  const [isDeal,setIsDeal]=useState(false);
  const [companies,setCompanies]=useState([]);
  const [companyId,setCompanyId]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    const handle=async()=>{
      const data=await getAllCompanyService();
      setCompanies(data);
    }
    handle();
  },[]);
  return (
    <div className="bg-white company h-100 ">
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Logo</th>
          <th scope="col">Name</th>
          <th scope="col">CUMULATED INVESTMENT</th>
          <th scope="col">CURRENT VALUATION </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {companies&&companies?.map((val, key) => (
          <tr key={key} className=' '>
            <td >
           <div style={{ width: "60px", aspectRatio: "1/1" }}>   <img className="w-100 h-100 rounded-circle" src={ Server+val?.profile} alt="" /></div>
            </td>
            <td className='text-uppercase '>{val?.name}</td>
            <td>${val?.dealSummary?.cumulatedInvest}</td>
            <td>${val?.dealSummary?.currentValuation}</td>
            <td className="d-flex gap-4">
            <button className="btn-red" onClick={()=>{setIsDeal(!isDeal);setCompanyId(val?._id);}}>
              Create a deal
              </button>
              <button
                onClick={() => navigate("new-company",{state:val?._id})}
                className="btn text-primary bg-very-light-gray rounded-circle"
              >
                <FaEye size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
   {isDeal&& <AddDealPop companyId={companyId} setIsNew={setIsDeal} />}
  </div>
  )
}

export default Companies


const data=[
  {img:logo1,name:"space x",invest:"14,500,00",valuation:"5,500,00"},
  {img:logo1,name:" pakpot",invest:"14,500,00",valuation:"5,500,00"},
  {img:logo1,name:"versori",invest:"14,500,00",valuation:"5,500,00"},
  {img:logo1,name:"space x",invest:"14,500,00",valuation:"5,500,00"},
  {img:logo1,name:"space x",invest:"14,500,00",valuation:"5,500,00"},
]