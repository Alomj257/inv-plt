import React, { useEffect, useState } from "react";
import "./pop.scss";
import { BsX, BsPlus } from "react-icons/bs";
import { addDealService } from "../../../../service/deal/dealService";
import { getUsersByRolesService } from "../../../../service/auth/AuthService";
import { currencyFormatter, deformateCurrency } from "../../../../utils/formater/dateTimeFormater";
import { getByIdCompanyService,    updateCompanyWithoutService } from "../../../../service/company/companyService";

const AddDealPop = ({ setIsNew, companyId }) => {

  const [deal, setDeal] = useState({});
  const [fields, setFields] = useState([]);
  const [investors,setInvestor]=useState([]);
  const [currency,setCurrency]=useState('');
  const [company,setComapany]=useState('');

  useEffect(()=>{
    const handle=async()=>{
      const data=await getByIdCompanyService(companyId);
      setComapany(data);
    }
    handle();
  },[companyId]);

  useEffect(()=>{
    const getUsers=async()=>{
      const data=await getUsersByRolesService("CUSTOMER")
      setInvestor(data);
    }
    getUsers();
  },[]);

  const handleAddField = () => {
    setFields([...fields, { name: '', amount: '', entryFee: '', carried: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    
    const newFields = fields.map((field, i) => {
      if (i === index) {
        // First, update the field with the new value
        const updatedField = {
          ...field,
          [name]: value
        };
        const amount = parseInt(updatedField['amount'] || 0);
        const entryFee = parseInt(updatedField['entryFee'] || 0);
        const carried = parseInt(updatedField['carried'] || 0);
        updatedField.fees = (amount * (entryFee + carried)) / 100;
        return updatedField;
      }
      
      return field;
    });
  
    setFields(newFields);
  };
  
  
  const handleDeal = async (e) => {
    e.preventDefault();
    const newDeal = { ...deal, investors: fields, companyId };

    let investDate;

    if(!company.dealSummary||!company.dealSummary.investDate){
     investDate= deal?.investedDate;
    }else{
      investDate=company?.dealSummary.investDate;
    }

    await updateCompanyWithoutService(companyId,{investDate:investDate,currentValuation:deal?.currentValue});
    await addDealService(newDeal);
    setIsNew(false);
  };
console.log(fields);
  return (
    <div className="pop">
      <div className="pop-body col-8 pb-5">
        <div className="text-end">
          <BsX
            onClick={() => setIsNew((prev) => !prev)}
            className="cursor-pointer"
            size={30}
          />
        </div>
        <h5 className="text-center mb-4 fs-4">Add a deal</h5>
        <form onSubmit={handleDeal}>
          <div className="d-flex flex-column gap-4 col-md-10 mx-auto">
            <div className="d-flex gap-4 align-items-center">
              <div className="field">
                <label htmlFor="valuation">Current valuation</label>
                <input
                  type="text"
                  name="valuation"
                  value={deal?.currentValue}
                  onChange={(e) =>
                    setDeal({
                      ...deal,
                      currentValue: e.target.value
                  })}
                  className="input-field"
                />
              </div>
              <div className="field">
                <label htmlFor="date">Investment date</label>
                <input
                  type="date"
                  name="date"
                  onChange={(e) =>
                    setDeal({ ...deal, investedDate: e.target.value })
                  }
                  className="input-field"
                />
              </div>
              <div className="field">
                <label htmlFor="date">Currency</label>
                <select
                  onChange={(e) => setCurrency(JSON.parse(e.target.value))}
                  name=""
                  id=""
                  className="input-field"
                >
                   <option
                    value={JSON.stringify({ currency: "EUR" })}
                  >
                    Euro
                  </option>
                  <option
                    value={JSON.stringify({ currency: "USD" })}
                  >
                    US Dollar
                  </option>
                </select>
              </div>
            </div>
            {fields.map((field, index) => (
              <div className="d-flex gap-4 align-items-center" key={index}>
                <div className="field w-50">
                  <label htmlFor={`name-${index}`}>Select Investors</label>
                  <div className="input-field w-100">
                    <select
                      name="investerId"
                      value={field.investerId}
                      onChange={(event) => handleChange(index, event)}
                      style={{ outline: "none" }}
                      className="border-0 bg-transparent w-100"
                    >
                      <option value="">Select Investor</option>
                      {investors?.length > 0 &&
                        investors.map((val, index) => (
                          <option key={index} value={val?._id}>
                            {val?.personal?.firstName} {val?.personal?.lastName}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor={`amount-${index}`}>Amount invested</label>
                  <input
                    type="text"
                    name="amount"
                    value={field.amount}
                    className="input-field"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="field">
                  <label htmlFor={`entryFee-${index}`}>Entry Fee in %</label>
                  <input
                    type="text"
                    name="entryFee"
                    value={field.entryFee}
                    className="input-field"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="field">
                  <label htmlFor={`carried-${index}`}>Carried in %</label>
                  <input
                    type="text"
                    name="carried"
                    value={field.carried}
                    className="input-field"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="d-flex gap-2 mt-auto align-items-center">
                  <button
                    type="button"
                    onClick={handleAddField}
                    style={{ width: "50px", aspectRatio: "1/1" }}
                    className="btn-red p-0 rounded-circle"
                  >
                    <BsPlus size={20} />
                  </button>
                  <button
                    type="button"
                    style={{ width: "50px", aspectRatio: "1/1" }}
                    onClick={() => handleRemoveField(index)}
                    className="btn-gray p-0 rounded-circle"
                  >
                    <BsX size={20} />
                  </button>
                </div>
              </div>
            ))}
            {fields.length <= 0 && (
              <div className="text-center">
                <button
                  type="button"
                  className="btn-red rounded-5 col-5"
                  onClick={handleAddField}
                >
                  Add an investor
                </button>
              </div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className={`btn-${
                  fields.length <= 0 ? "gray" : "red"
                } rounded-5 col-5`}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDealPop;
