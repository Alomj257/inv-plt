import { getByCompanyIdDealService } from "../../service/deal/dealService";
import { deformateCurrency } from "../formater/dateTimeFormater";

export const getInvestmentsAndCurrent=async(id)=>{
  const data=await  getByCompanyIdDealService(id);
  try {
    const current = data?.reduce((sum, val) => sum + (deformateCurrency(val?.currentValue) || 0), 0);
  const totalInvestment = data?.reduce((sum, val) => {
    const investmentSum = val?.investors?.reduce((investSum, investor) => {
      return investSum + (deformateCurrency(investor?.amount) || 0);
    }, 0) || 0;
    return sum + investmentSum;
  }, 0);
return {totalInvestment,current};
  } catch (error) {
    console.log(error)
  }
  
}