import React, { useEffect, useState } from 'react'
import { getAllDealByUserAndCompanyService } from '../../../../../service/deal/dealService';
import { getByIdCompanyService } from '../../../../../service/company/companyService';
import { getAuth } from '../../../../../utils/authenticationHelper';

const Investments = ({userId}) => {
  const [company,setCompany]=useState([]);

  useEffect(()=>{
    const getCompany=async()=>{
        const data=await getAllDealByUserAndCompanyService(userId);
        setCompany(data);
    }
    getCompany();
  },[]);
  return (
    <>
       <div className="bg-white h-50">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col text-uppercase "> </th>
                  <th scope="col text-uppercase "> COMPANY</th>
                  <th scope="col text-uppercase ">Asset Class</th>
                  <th scope="col text-uppercase ">Net Profit(Loss)</th>
                  <th scope="col text-uppercase ">SECTOR</th>
                  <th scope="col text-uppercase ">NET MOIC</th>
                  <th scope="col text-uppercase ">TOTAL INVESTMENT</th>
                  <th scope="col text-uppercase ">NET IRR </th>
                  <th scope="col text-uppercase ">NUMBER OF INVESTMENTS </th>
                </tr>
              </thead>
              <tbody>
              {company.length==0&& <h5 className='text-center text-muted'>No Any Investment  </h5>}
                {company.length > 0 &&
                  company?.map((val, key) => (
                    <Company deals={val?.deals} companyId={val?._id} index={key}/>
                  ))}
              </tbody>
            </table>
          </div>
    </>
  )
}

export default Investments;

const Company=({companyId,index,deals})=>{
const [company,setCompany]=useState(null);
const user=getAuth()?.user;

useEffect(()=>{
  const getCompanyById=async()=>{
    const data=await getByIdCompanyService(companyId);
    setCompany(data);
  }
  getCompanyById();
},[company])
  return<>
   <tr key={index} className="p-3 ">
                      <td>
                        <img src={company?.img} alt="" />
                      </td>
                      <td>{company?.name}</td>
                      <td>{company?.dealSummary?.asset}</td>
                      <td>{company?.dealSummary?.profitLoss}</td>
                      <td>{company?.dealSummary?.sector}</td>
                      <td>{company?.moic}</td>
                      <td>{company?.totalInvet}</td>
                      <td>{company?.irr}</td>
                      <td className="d-flex gap-3">
                        <button style={{cursor:user?.account?.role==='ADMIN'?"not-allowed":"pointer"}} disabled={user?.account?.role==='ADMIN'} className="btn-red bg-dark-orange">
                          {deals?.length} Investments
                        </button>
                      </td>
                    </tr>
  </>
}


