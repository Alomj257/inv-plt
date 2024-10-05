import React, { useEffect, useState } from 'react'
import "./deals.scss";
import { useNavigate } from 'react-router-dom';
import { getAllDealService } from '../../../service/deal/dealService';
import NetProfit from '../../../components/customer/dealPop/profitCal';
import { Server } from '../../../service/axios';
import { currencyFormatter } from '../../../utils/formater/dateTimeFormater';
import { calculateIrrSingleInvestment } from '../../../utils/calculations/calculateIrrSingleInvestment';
import { getByIdCompanyService } from '../../../service/company/companyService';
import { getUserByIdService } from '../../../service/auth/AuthService';
import { netMoic, netProfit } from '../../../utils/calculations/investorGrossTotal';
const Deals = () => {
    const navigate=useNavigate();
    const [deals,setDeals]=useState([]);
    const [company, setCompany]=useState([]);
    useEffect(()=>{
        const handle=async()=>{
            const data=await getAllDealService();
            setDeals(data);
        }
        handle();
    },[]);


  return (
    <div>
        <table className='ps-5'>
          <thead className="thead-dark">
            <tr>
              <th scope="col text-uppercase " style={{ width: "60px", aspectRatio: "1/1" }}  className="border-0"> </th>
              <th scope="col text-uppercase "> COMPANY </th>
              <th scope="col text-uppercase ">Investor </th>
              <th scope="col text-uppercase "> INVESTMENT DATE</th>
              <th scope="col text-uppercase "> INVESTMENT</th>
              <th scope="col text-uppercase ">NET PROFIT(LOSS)</th>
              <th scope="col text-uppercase ">NET MOIC</th>
              <th scope="col text-uppercase ">NET IRR </th>
              <th scope="col text-uppercase ">Current Shareholding(%) </th>
              <th style={{ width: "60px", aspectRatio: "1/1" }}  className="border-0"></th>
            </tr>
          </thead>
          <tbody>
            {deals?.map((val, key) => (
             val?.investors?.map((v,i)=>(
             <tr key={key} className="p-3 " >
               <GetCompany id={val?.companyId}/>
               <GetInvest deal={val} investor={v} investDate={val?.investedDate} currentValuation={val?.currentValue}/>
              </tr>
              )) 
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Deals;
const GetCompany = ({ id }) => {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    const handle = async () => {
      const data = await getByIdCompanyService(id);
      setCompany(data);
    };
    if(id){
        handle();
    }
  }, [id]);
  return (
    <>
      <td>
        <div
          onClick={() => navigate("about", { state: company?._id })}
          className=" ms-3"
          style={{ width: "50px", aspectRatio: "1/1" }}
        >
          <img
            className="w-100 h-100 rounded-circle"
            src={Server + company?.profile || company?.img}
            alt=""
          />
        </div>
      </td>
      <td className="text-capitalize">{company?.name}</td>
    </>
  );
};


const GetInvest = ({ deal, investor, investDate, currentValuation }) => {
    const [profit,setprofit]=useState(0);
    const [moic,setMoic]=useState(0);
    useEffect(()=>{
        const handle=async()=>{
            const paid = parseFloat(investor?.amount || 0) + parseFloat(investor?.fees || 0);
            const carried = parseFloat(investor?.carried || 0);
            const shareholding = parseFloat(investor?.shareholding || 0);
            const profitResult = await netProfit(paid, shareholding, currentValuation, deal.currency, carried/100);
            const moicResult = await netMoic(paid, shareholding, currentValuation, deal.currency, carried/100);
            setprofit(profitResult?.toFixed(2));
            setMoic(moicResult);
        }
        handle();
    },[deal, investor, investDate, currentValuation])

  return (
    <>
      <td>
        <InvestorName id={investor?.investerId} />
      </td>
      <td>{investDate}</td>
      <td> {currencyFormatter( investor?.invest,deal?.currency)}</td>
      <td>{profit}</td>
      <td> {moic}</td>
      <td>
        <IrrVal
          initialInvestment={investor?.amount}
          investmentDate={investDate}
          currentValue={currentValuation}
        />
      </td>
      <td    style={{ width: "50px", aspectRatio: "1/1" }}>{investor?.shareholding}%</td>
    </>
  );
};

const InvestorName=({id})=>{
    const [user,setuser]=useState(null);
    useEffect(()=>{
        const handle=async()=>{
            const data=await getUserByIdService(id);
            console.log(data,id)
            setuser(data);
        }
        if(id){
            handle();
        }
    },[id])
    console.log(user)
    return<> {user?.personal?.firstName} {user?.personal?.lastName}</>
}

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

  