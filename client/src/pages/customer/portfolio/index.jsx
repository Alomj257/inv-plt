import React, { useEffect, useState } from 'react'
import invest from "../../../assets/all-img/investment.png"
import valuation from "../../../assets/all-img/examination.png"
import amount from "../../../assets/all-img/receive-money.png"
import moic from "../../../assets/all-img/distribution-of-wealth.png"
import profit from "../../../assets/all-img/increase.png"
import irr from "../../../assets/all-img/return-on-investment.png"
import DealListpop from '../../../components/customer/dealPop'
import {  getByIdCompanyService } from '../../../service/company/companyService'
import { getAllDealByUserAndCompanyService } from '../../../service/deal/dealService'
import { Server } from '../../../service/axios'
import { getAuth } from '../../../utils/authenticationHelper'
const Portfolio = () => {
  const [company,setCompany]=useState([]);
  const userId=getAuth().user?._id;

  useEffect(()=>{
    const getCompany=async()=>{
      const data=await getAllDealByUserAndCompanyService(userId);
      setCompany(data);
    }
    getCompany();
  },[userId])
  console.log()

  return (
    <>
    {/* overview */}
      <div className="">
        <div className="container w-100 pe-0">
          <div className="row">
            <div className="row row-cols-3 pe-0">
              {fieldData?.map((val, index) => (
                <div key={index} className='px-0'>
                  <div className={`d-flex p-2 border border-1 mb-3 ${index%3!==0&&"mx-3"} rounded-1 border-dark bg-white  justify-content-between`}>
                    <div className='d-flex flex-column gap-2 justify-content-between'>
                        <span className='text-muted small'>{val?.name}</span>
                        <span className='fw-bold '>{val?.qty}</span>
                    </div>
                    <div className='my-auto  rounded-circle bg-very-light-red' style={{width:"40px",aspectRatio:"1/1"}}><img className='w-100 h-100 p-2' src={val?.icon} alt={val?.name} /></div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* investment */}
      <div className="h-50">
        <div className="my-3">
            <div className="bg-dark py-4 px-5 rounded d-flex justify-content-between">
                <h5 className="text-white">Investments</h5>
            </div>
        </div>
        <div className="bg-white h-50">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col text-uppercase "> </th>
              <th scope="col text-uppercase "> COMPANY</th>
              <th scope="col text-uppercase ">Asset className</th>
              <th scope="col text-uppercase ">Net Profit(Loss)</th>
              <th scope="col text-uppercase ">SECTOR</th>
              <th scope="col text-uppercase ">NET MOIC</th>
              <th scope="col text-uppercase ">TOTAL INVESTMENT</th>
              <th scope="col text-uppercase ">NET IRR </th>
              <th scope="col text-uppercase ">NUMBER OF INVESTMENTS </th>
            </tr>
          </thead>
          <tbody>
            {company&&company.length>0&&company?.map((val, key) => (
              <Company index={key} companyId={val?._id} deals={val?.deals}/>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default Portfolio

const fieldData = [
   {name:" TOTAL INVESTMENTS",qty:"6",icon:invest},
   {name:"  CURRENT VALUATION",qty:"£ 8,500,000",icon:valuation},
   {name:"   AMOUNT INVESTED (INCL. FEES)",qty:"£ 4,500,000",icon:amount},
   {name:"  NET MOIC",qty:"12%",icon:moic},
   {name:" NET PROFIT (LOSS)",qty:" £ 4,000,000",icon:profit},
   {name:"  NET IRR",qty:" 90%",icon:irr},
  ];
  
const Company = ({ companyId, index, deals }) => {
  const [company, setCompany] = useState(null);
  const [isDealList, setisDealList] = useState(false);

  useEffect(() => {
    const getCompanyById = async () => {
      const data = await getByIdCompanyService(companyId);
      setCompany(data);
    };
    getCompanyById();
  }, [company]);
  return (
    <>
      <tr key={index} className="p-3 ">
        <td>
        <div className=' ' style={{width:'50px',aspectRatio:"1/1"}}>  <img className='w-100 h-100 rounded-circle' src={Server+company?.profile||company?.img} alt="" /></div>
        </td>
        <td className='text-capitalize'>{company?.name}</td>
        <td>{company?.dealSummary?.asset}</td>
        <td>{company?.dealSummary?.profitLoss}</td>
        <td>{company?.dealSummary?.sector}</td>
        <td>{company?.moic}</td>
        <td>{company?.totalInvet}</td>
        <td>{company?.irr}</td>
        <td className="d-flex gap-3">
          <button onClick={() => setisDealList(true)} className="btn-red">
            {deals && deals?.length} Investments
          </button>
        </td>
      </tr>
      {isDealList && <DealListpop company={company} deals={deals} setIsNew={setisDealList} />}
    </>
  );
};
  