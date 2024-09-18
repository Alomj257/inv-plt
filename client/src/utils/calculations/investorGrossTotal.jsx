export const investorGrossTotal=(currentValuation,totalAmountInvested,investByInvestor,totalInvestedByCompany)=>{
try {    
    //  const  totalAmountInvested=647662.5;
    // const postValuation=54000000;
    const currentPostValuation=77600000;
    const currentShareholding=totalAmountInvested/currentPostValuation*100;
    const shareholdingInvestor=investByInvestor/totalInvestedByCompany*100;
    return currentShareholding*currentValuation*shareholdingInvestor;
} catch (error) {
    console.log(error)
    return 0;
}
}


const netTotalProfit=(currentValuation,totalAmountInvested,investByInvestor,totalInvestedByCompany)=>{
    try {
        
    } catch (error) {
        console.log(error)
        return 0;
    }
}