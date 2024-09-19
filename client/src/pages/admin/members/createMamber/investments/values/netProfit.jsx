import React, { useEffect, useState } from 'react';
import { netMoic, netTotalProfit } from '../../../../../../utils/calculations/investorGrossTotal';
import { getAllDealByInvestorService } from '../../../../../../service/deal/dealService';

const NetProfit = ({ deals, sector, currentValuation, userId }) => {
  const [profit, setProfit] = useState(0);
  const [moic, setMoic] = useState(0);
  const [totalAmountInvested, setTotalInvestMent] = useState(0);

  const getAllProfit = async () => {
    const data = await getAllDealByInvestorService(userId);
    const totalDeals = data.reduce((sum, item) => {
      const investor = item?.investors?.find(v => v.investerId === userId);
      return sum + (parseInt(investor?.amount || 0));
    }, 0);
    setTotalInvestMent(totalDeals);
  };

  useEffect(() => {
    const calculateProfitAndMoic = () => {
      let totalInvested = 0;
      let totalFees = 0;
      let totalInvestedInCompany = 0;
      let carried = 0;

      deals.forEach(item => {
        const investor = item?.investors?.find(v => v.investerId === userId);
        if (investor) {
          totalInvested += parseInt(investor?.amount || 0);
          totalFees += parseInt(investor?.fees || 0);
          carried += parseInt(investor?.carried || 0);
        }
        const companyInvestment = item?.investors?.reduce((sum, v) => sum + parseInt(v?.amount || 0), 0);
        totalInvestedInCompany += companyInvestment;
      });

      const pro = netTotalProfit(currentValuation, totalAmountInvested, totalInvested, totalInvestedInCompany, totalFees, carried / 100);
      const moic = netMoic(currentValuation, totalAmountInvested, totalInvested, totalInvestedInCompany, totalFees, carried / 100);
      
      setProfit(pro);
      setMoic(moic);
    };

    getAllProfit().then(() => calculateProfitAndMoic());
  }, [currentValuation, userId, deals, totalAmountInvested]);

  return (
    <>
      <td>{profit}</td>
      <td>{sector}</td>
      <td>{moic}</td>
    </>
  );
};

export default NetProfit;
