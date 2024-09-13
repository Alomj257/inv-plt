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
import { currencyFormatter } from '../../../utils/formater/dateTimeFormater'
import { portfolioIrrParameter } from '../../../utils/calculationConversion'
import { calculatePortfolioIrr } from '../../../utils/calculations/portfolioIrr'
const Portfolio = () => {
  const [company,setCompany]=useState([]);
  const [totalInvestments,setTotalInvestment]=useState(0);
  const [totalInvested,setTotalInvested]=useState(0);
  const [irrVal,setIrr]=useState(0);
  const userId=getAuth()?.user?._id;

  
const fieldData = [
   {name:" TOTAL INVESTMENTS",qty:totalInvestments,icon:invest},
   {name:"  CURRENT VALUATION",qty:currencyFormatter(8500000),icon:valuation},
   {name:"   AMOUNT INVESTED (INCL. FEES)",qty:currencyFormatter(totalInvested),icon:amount},
   {name:"  NET MOIC",qty:"12%",icon:moic},
   {name:" NET PROFIT (LOSS)",qty:currencyFormatter(4000000),icon:profit},
   {name:"  NET IRR",qty:irrVal,icon:irr},
  ];

  useEffect(()=>{
    const getCompany=async()=>{
      const data=await getAllDealByUserAndCompanyService(userId);
      setTotalInvestment(() => {
        const totalDeals = data.reduce((sum, item) => {
          return sum + (item?.deals?.length || 0);
        }, 0);
        return totalDeals;
      });
      setTotalInvested(() => {
        const totalDeals = data.reduce((sum, item) => {
          const dealSum = item?.deals?.reduce((dealSum, deal) => {
            const investor = deal?.investors?.find(
              (v) => v?.investerId === userId
            );
            return dealSum + parseInt(investor?.amount || 0);
          }, 0);
          return sum + dealSum;
        }, 0);
        return totalDeals;
      });
      const { totalCurrentValue, currentDate, investments } =
        portfolioIrrParameter(data, userId);
      if (totalCurrentValue && currentDate && investments) {
        const ans = calculatePortfolioIrr(
          investments,
          currentDate,
          totalCurrentValue
        );
        setIrr(ans);
      }

      setCompany(data);
    }
    getCompany();
  },[userId])
  console.log(company)
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
            {company&&company.length>0&&company?.map((val, key) => (
              <Company list={company} index={key} companyId={val?._id} userId={userId} deals={val?.deals}/>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default Portfolio

  
const Company = ({ companyId,list, index, deals,userId }) => {
  const [company, setCompany] = useState(null);
  const [isDealList, setisDealList] = useState(false);
  const [totalIvestMents,setTotalInvestMent]=useState(0);
  const [irr,setIrr]=useState(0);
  



  useEffect(() => {
    const getCompanyById = async () => {
      const data = await getByIdCompanyService(companyId);
      setCompany(data);
      setTotalInvestMent(() => {
        const totalDeals = deals.reduce((sum, item) => {
          const investor=item?.investors?.find(v=>v.investerId===userId);
          return sum + ( parseInt(investor?.amount || 0));
        }, 0);
        return totalDeals;
      });
      
      const filteredList=list?.filter(v=>v._id===companyId);
      const {totalCurrentValue, currentDate, investments}=portfolioIrrParameter(filteredList,userId);
      if(totalCurrentValue&&currentDate&&investments){
        setIrr(calculatePortfolioIrr(investments,currentDate,totalCurrentValue));
      }

    };
    getCompanyById();
  }, [companyId]);
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
        <td>{currencyFormatter(totalIvestMents)}</td>
        <td>{irr}</td>
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
  