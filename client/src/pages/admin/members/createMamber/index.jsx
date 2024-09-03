import React, { useEffect, useState } from "react";
import "./createMamber.scss";
import { useLocation } from "react-router-dom";
import { addMemberService, getByIdMemberService, updateMemberService } from "../../../../service/member/memberService";
import { getAllDealByInvestorService, getAllDealService, getByCompanyIdDealService } from "../../../../service/deal/dealService";
import { getAllCompanyService } from "../../../../service/company/companyService";
import { getUserByIdService, registerService, updateAuthService } from "../../../../service/auth/AuthService";
import { generateRandomPassword } from "../../../../utils/randomPassword";
import { getAllIndustryService } from "../../../../service/options/optionsService";
const CreateMamber = () => {
  const {pathname,state}=useLocation();
  const paths=pathname.split("/");
  const [member,setMember]=useState(null);
  const [isEdit,setIsEdit]=useState(false);
  const [company,setCompany]=useState([]);
  
  useEffect(()=>{
    const getCompany=async()=>{
      const data=await getAllCompanyService();
      setCompany(data);
    }
    getCompany();
  },[])

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setMember({...member,[name]:value});
  }
  useEffect(()=>{
    const handleGet=async()=>{
      const data=await getUserByIdService(state);
      setMember({...data?.account,...data?.personal});
    }
    if(state){
      handleGet();
    }
  },[state]);
  const [companies,setCompanies]=useState([]);
  const [industry,setIndustry]=useState('');
  
  useEffect(()=>{
    const getIndus=async()=>{
          const data=await getAllIndustryService();
          setIndustry(data);
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
    place: "thomas.domnugue@gmail.com",
    type: "input",
    name: "email",
    label: " E-mail",
  },
  {
    place: "Paris, France",
    type: "input",
    name: "city",
    label: "City of residence",
  },
  { place: " 10-05-1993", type: "date", name: "dob", label: "Date Of birth" },
  {
    place: " 07754838908",
    type: "input",
    name: "phone",
    label: "Phone number",
    option:companies
  },
  { place: "Blue Nest", type: "select", name: "company", label: "Company name",option:companies },
  {
    place: " Tech and E-commerce ",
    type: "select",
    name: "industry",
    label: " Industry",
    option:industry
  },
];


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(state){
      updateAuthService(state,{personal:{...member},account:{...member}});
      setIsEdit(false);
      return;
    }
    const password=generateRandomPassword();
    registerService({account:{...member ,password:password,cnfPassword:password},personal:{...member}});
  }

  return (
    <>
      {state && (
        <div className="d-flex my-3 py-3  admin-header justify-content-between align-items-center">
          <h5 className="text-capitalize m-0 fw-semibold">Personal Details</h5>
          <div className="right-profile  d-flex gap-4">
            {!isEdit && (
              <div>
                <button
                  onClick={() => setIsEdit(true)}
                  className="btn-red py-2 text-decoration-none"
                >
                  {" "}
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div className="bg-white create-mamber">
          <div className="container">
            <div className="row">
              <div className="row row-cols-3">
                {fieldData?.map((val, index) => (
                  <div key={index}>
                    <div className="mx-3 mb-3 d-flex flex-column gap-2 field">
                      <label className="ms-3" htmlFor="">
                        {val?.label}
                      </label>
                      {val?.type === "select" ? (
                        <select
                          name={val?.name}
                          onChange={handleChange}
                          type="text"
                          style={{
                            cursor: state
                              ? isEdit
                                ? "auto"
                                : "not-allowed"
                              : "auto",
                          }}
                          disabled={state ? !isEdit : false}
                          value={member && member[val?.name]}
                          placeholder={val?.place}
                          className="input-field"
                        >
                          <option value="">Select {val?.name}</option>
                          {val?.option&&val?.option?.map((v, i) => (
                            <>
                              <option key={index + "" + i} value={v?.name}>
                                {v?.name}
                              </option>
                            </>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          style={{
                            cursor: state
                              ? isEdit
                                ? "auto"
                                : "not-allowed"
                              : "auto",
                          }}
                          disabled={state ? !isEdit : false}
                          onChange={handleChange}
                          value={member && member[val?.name]}
                          name={val?.name}
                          placeholder={val?.place}
                          className="input-field"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {(isEdit || !state) && (
          <div className="text-center">
            <button className="btn-red rounded-5 px-4 my-3">Save</button>
          </div>
        )}
      </form>

      {!paths?.includes("personal-add") && (
        <div className="h-50">
          <div className="my-3">
            <div className="bg-dark py-4 px-5 rounded d-flex justify-content-between">
              <h5 className="text-white">Investments</h5>
            </div>
          </div>
          <div className="bg-white h-50">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col text-uppercase "> </th>
                  <th scope="col text-uppercase "> COMPANY</th>
                  <th scope="col text-uppercase ">Asset CLASS</th>
                  <th scope="col text-uppercase ">Net Profit(Loss)</th>
                  <th scope="col text-uppercase ">SECTOR</th>
                  <th scope="col text-uppercase ">NET MOIC</th>
                  <th scope="col text-uppercase ">TOTAL INVESTMENT</th>
                  <th scope="col text-uppercase ">NET IRR </th>
                  <th scope="col text-uppercase ">NUMBER OF INVESTMENTS </th>
                </tr>
              </thead>
              <tbody>
                {company.length > 0 &&
                  company?.map((val, key) => (
                    <tr key={key} className="p-3 ">
                      <td>
                        <img src={val?.img} alt="" />
                      </td>
                      <td>{val?.name}</td>
                      <td>{val?.dealSummary?.asset}</td>
                      <td>{val?.dealSummary?.profitLoss}</td>
                      <td>{val?.dealSummary?.sector}</td>
                      <td>{val?.moic}</td>
                      <td>{val?.totalInvet}</td>
                      <td>{val?.irr}</td>
                      <td className="d-flex gap-3">
                        <button className="btn-red">
                          <Investment id={val?._id} /> Investments
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateMamber;


const Investment=()=>{
  const id=JSON.parse(localStorage.getItem("auth")||'')?.user?.account?.email;
  const [deals,setDeals]=useState(false);
  
  useEffect(()=>{
    const getDeal=async()=>{
      const data=await getAllDealByInvestorService(id);
      setDeals(data);
    }
    getDeal();
  },[id]);
  return <>{deals?.length}</>
}




const data=[
  {img:"",name:"spaceX",asset:"Equity",profit:"0.7%",sector:"Space exploration",moic:"$ 2,30,00,000",totalInvet:"$ 2,30,00,000",irr:"0.7%"},
  {img:"",name:"spaceX",asset:"Equity",profit:"0.7%",sector:"Space exploration",moic:"$ 2,30,00,000",totalInvet:"$ 2,30,00,000",irr:"0.7%"},
  {img:"",name:"spaceX",asset:"Equity",profit:"0.7%",sector:"Space exploration",moic:"$ 2,30,00,000",totalInvet:"$ 2,30,00,000",irr:"0.7%"},
  {img:"",name:"spaceX",asset:"Equity",profit:"0.7%",sector:"Space exploration",moic:"$ 2,30,00,000",totalInvet:"$ 2,30,00,000",irr:"0.7%"},
  {img:"",name:"spaceX",asset:"Equity",profit:"0.7%",sector:"Space exploration",moic:"$ 2,30,00,000",totalInvet:"$ 2,30,00,000",irr:"0.7%"},
]