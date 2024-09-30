import React, { useEffect, useState } from 'react';
import { getAllDealByInvestorService } from '../../../../../../service/deal/dealService';
import {netProfit,netMoic} from "../../../../../../utils/calculations/investorGrossTotal";

const NetProfit = ({ deals, sector, currentValuation, userId }) => {
  const [profit, setProfit] = useState(0);
const [moic, setMoic] = useState(0);
const [totalIvestMents,setTotalInvestMent]=useState(0);

const getAllProfit = async () => {
  const data = await getAllDealByInvestorService(userId);
  const totalDeals = data.reduce((sum, item) => {
    const investor = item?.investors?.find(v => v.investerId === userId);
    return sum + parseInt(investor?.amount || 0);
  }, 0);
  setTotalInvestMent(totalDeals);
};

useEffect(() => {
  const calculateProfitAndMoic = async () => {
    let totalProfit = 0;
    let totalMoic = 0;

    for (const item of deals) {
      const investor = item?.investors?.find(v => v.investerId === userId);
      if (investor) {
        const paid = parseInt(investor?.amount || 0) + parseFloat(investor?.fees || 0);
        const carried = parseFloat(investor?.carried || 0);
        const shareholding = parseFloat(investor?.shareholding || 0);

        const profitResult = await netProfit(paid, shareholding, currentValuation, item.currency, carried/100);
        const moicResult = await netMoic(paid, shareholding, currentValuation, item.currency, carried/100);
        totalProfit += profitResult;
        totalMoic += moicResult;
      }
    }
    setProfit(totalProfit);
    setMoic(totalMoic);
  };
  getAllProfit().then(() => calculateProfitAndMoic());
}, [currentValuation, userId, deals]);



  return (
    <>
      <td>{profit}</td>
      <td>{sector}</td>
      <td>{moic}</td>
    </>
  );
};

export default NetProfit;
