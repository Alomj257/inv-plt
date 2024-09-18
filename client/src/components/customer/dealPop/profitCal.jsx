import React, { useEffect, useState } from 'react'
import { getAllDealByInvestorService } from '../../../service/deal/dealService';
import { netMoic, netTotalProfit } from '../../../utils/calculations/investorGrossTotal';

const NetProfit = ({deal,sector,currentValuation,userId}) => {
    const [profit,setProfit]=useState(0);
    const [moic,setMoic]=useState(0);
    const [totalAmountInvested,setTotalInvestMent]=useState(0);
    useEffect(()=>{
        const getAllProfit=async()=>{
            const data=await getAllDealByInvestorService(userId);
            setTotalInvestMent(() => {
                const totalDeals = data.reduce((sum, item) => {
                  const investor=item?.investors?.find(v=>v.investerId===userId);
                  return sum + ( parseInt(investor?.amount || 0));
                }, 0);
                return totalDeals;
              });
        }
        getAllProfit();
    },[userId])
    

    useEffect(() => {
        let totalInvested = 0;
        let totalFees = 0;
        let totalInvestedInCompany = 0;
        let carried=0;
      
          const investor = deal?.investors?.find(v => v.investerId === userId);
          if (investor) {
            totalInvested += parseInt(investor?.amount || 0);
            totalFees += parseInt(investor?.fees || 0);
            carried+=parseInt(investor?.carried||0);
          }
          const companyInvestment = deal?.investors?.reduce((sum, v) => sum + parseInt(v?.amount || 0), 0);
          totalInvestedInCompany += companyInvestment;
    //   console.log(currentValuation,totalAmountInvested,totalInvested,totalInvestedInCompany,totalFees)
        const pro=netTotalProfit(currentValuation,totalAmountInvested,totalInvested,totalInvestedInCompany,totalFees,carried/100);
        const moic=netMoic(currentValuation,totalAmountInvested,totalInvested,totalInvestedInCompany,totalFees,carried/100);
        setProfit(pro);
        setMoic(moic);
      }, [currentValuation,userId,deal,totalAmountInvested]);
      
  return (
    <>
        <td>  {profit}</td> 
      <td>{sector}</td>
        <td>{moic}</td>
    </>
  )
}

export default NetProfit
