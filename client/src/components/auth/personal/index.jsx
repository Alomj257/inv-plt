import React, { useEffect, useState } from "react";
import { getAllCompanyService, getAllIndustryService } from "../../../service/options/optionsService";

const Personal = ({setPersonal}) => {
  const [newIndus,setNewIndus]=useState('');
  const [industries,setIndustries]=useState([]);
  const [companies,setCompanies]=useState([]);
  const [industry,setIndustry]=useState('');
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name==="industry"&&value==="Other"){
      setIndustry(value)
      setPersonal(pre=>({...pre,[name]:industry}));
    }else{
    setPersonal(pre=>({...pre,[name]:value}))
    }
  }
  useEffect(()=>{
    const getIndus=async()=>{
          const data=await getAllIndustryService();
          setIndustries(data);
    }
    getIndus();
  },[]);

  useEffect(()=>{
    const getCompany=async()=>{
        const data=await getAllCompanyService();
        setCompanies(data);
    }
    getCompany();
  },[]);

const fieldData = [
  { place: "Thomas", type: "input", name: "firstName", label: "First name" },
  { place: "Domingue", type: "input", name: "lastName", label: "Last name" },
  {
    place: "Paris, France",
    type: "input",
    name: "city",
    label: "City of residence",
  },
  { place: " 10-05-1993", type: "date", name: "dob", label: "Date Of birth" },
  { place: "Blue Nest", type: "select", name: "company", label: "Company name",option:companies },
  {
    place: " Tech and E-commerce ",
    type: "select",
    name: "industry",
    label: " Industry",
    option: industries,
  },
];

  return (<>
    <div className="row row-cols-md-2">
      {fieldData?.map((val, index) => (
        <div key={index}>
          <div className="px-0 mb-4  d-flex flex-column gap-2 field">
            <label className="ms-3" htmlFor="">
              {val?.label}
            </label>
            {val?.type === "select" ? (
              <select name={val?.name} onChange={handleChange} id="" className="input-field ">
                  <option value="">Select {val?.name}</option>
                {val?.option?.map((v, i) => (<>
                  <option key={index + "" + i} value={v?.name}>
                    {v?.name}
                  </option>
                  </>
                ))}
              {val?.name==="industry"&&<option value="Other">Other</option>}
              </select>
            ) : (
              <input
                type={val?.name==="dob"?"date":"text"}
                name={val?.name}
                onChange={handleChange}
                placeholder={val?.place}
                className="input-field text-white"
              />
            )}
          </div>
        </div>
      ))}
    </div>
      {industry==="Other"&&
           <div className="px-0 mb-4  d-flex flex-column gap-2 field">
      <input
           type="text"
           name="industry"
           onChange={handleChange}
           placeholder="Select Industry"
           className="input-field text-white"
         />
         </div>
}
    </>
  );
};

export default Personal;

