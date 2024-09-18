export const investorGrossTotal = (
  currentValuation,
  totalAmountInvested,
  investByInvestor,
  totalInvestedByCompany
) => {
  try {
    //  const  totalAmountInvested=647662.5;
    // const postValuation=54000000;
    const currentPostValuation = 77600000;
    const currentShareholding =
      (totalAmountInvested / currentPostValuation) * 100;
    const shareholdingInvestor =   (investByInvestor / totalInvestedByCompany) * 100;
    return (currentShareholding * currentValuation * shareholdingInvestor).toFixed(2);
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const netTotalProfit = (
  currentValuation,
  totalAmountInvested,
  investByInvestor,
  totalInvestedByCompany,
  fees,
      carried
) => {
  try {
    const gross = investorGrossTotal(
      currentValuation,
      totalAmountInvested,
      investByInvestor,
      totalInvestedByCompany,
    );

    const paid=totalAmountInvested+fees;
    if(gross-paid<=0){
      return  (gross-paid).toFixed(2);
    }else{
        return (gross-paid)*(1-(carried||0)).toFixed(2);
    }
  } catch (error) {
    console.log(error);
    return 0;
  }
};


export const netMoic=(  currentValuation,
    totalAmountInvested,
    investByInvestor,
    totalInvestedByCompany,
    fees,
        carried)=>{
            const paid=totalAmountInvested+fees;
            const profit=netTotalProfit(currentValuation,
                totalAmountInvested,
                investByInvestor,
                totalInvestedByCompany,
                fees,
                    carried);
                    
            return ((profit+paid)/paid).toFixed(2);
        }