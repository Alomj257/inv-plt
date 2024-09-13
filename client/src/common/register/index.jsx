import React, { useState } from "react";
import "./register.scss";
import img from "../../assets/all-img/auth.png";
import logo from "../../assets/all-img/Logo-02-removebg-preview.png";
import Personal from "../../components/auth/personal";
import Investment from "../../components/auth/investment";
import Account from "../../components/auth/account";
import { registerService } from "../../service/auth/AuthService";
import { IoIosArrowRoundForward } from "react-icons/io";
import { showToast } from "../../utils/toasters";
import { useNavigate } from "react-router-dom";
import Success from "../../components/auth/success";
import AgreementPop from "../../components/auth/agreement";

const Register = () => {
  const [step, setStep] = useState(0);
  const [subTask, setTask] = useState(0);
  const naviagte=useNavigate();
  const [personal, setPersonal] = useState(null);
  const [account, setAccount] = useState(null);
  const [investVal, setInvestVal] = useState(null);
  const [isPop,setIspop]=useState(false);

  const comps = [
    { com: <Personal setPersonal={setPersonal} /> },
    {
      com: (
        <Investment
          invest={invest}
          step={subTask}
          setStep={setTask}
          setInvestVal={setInvestVal}
        />
      ),
    },
    { com: <Account setAccount={setAccount} /> },
  ];

  const handleStep = () => {
    if(step===comps.length - 1&&!account.agreement){
      setIspop(true);
      return;
    }
    if (step == comps.length - 1) {
      handleSubmit();
      return;
    }
    if (step === 1) {
      if (subTask >= invest.length - 1) {
        setStep(step + 1);
      } else {
        setTask(subTask + 1);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleSubmit = async() => {
    const data = {
      personal: personal,
      investmentInfo: investVal,
      account: account,
    };
    if(data?.account&&data?.investmentInfo&&data?.account){
       await     registerService(data);
        setStep(step+1);
    }else{
        showToast("error","field Required")
    }
  };




  return (
    <div>
  {isPop&& <AgreementPop setIsNew={setIspop} setAccount={setAccount} />}
      <div className="register">
        <div className="register-left">
          <img src={img} className="w-100 h-100" alt="" />
        </div>
        <div className="register-right d-flex flex-column">
          {step===comps.length? <Success  />:<>
                    <div className="row">
            <div className="col-10 ps-0 ms-auto d-flex justify-content-between align-items-center">
              <h5 className="semibol">
                Get reporting, access to new deals. <br />
                Join Anyma Club.
              </h5>
              <div className="d-flex flex-column">
                <div className="logo">
                  <img className="w-100 h-100" src={logo} alt="" />
                </div>
                <small className="pres">Investor dashboard</small>
              </div>
            </div>
            <div className="col-10 mx-auto">
              <div className="col-md-10 px-0 mx-auto">
                <div className="progress-comp my-4  ">
                  <ul className="px-0 mx-0">
                    {head?.map((val, index) => (
                      <li key={index} onClick={()=>{setStep(index);setTask(0)}} className={index == step ? "active" : ""}>
                        <span>{val}</span>
                        <div className="d-flex align-items-center">
                          <div className="w-100 empty"></div>
                          <div className="node ms-auto"></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {comps[step].com}
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto pb-3 mt-auto">
            <div className="col-md-10 mx-auto pe-0">
              <button disabled={!personal} onClick={handleStep} className={`${step>=2?"btn-red":`btn-${!personal&&"dark"}-gray `} d-flex  py-2 rounded-5 w-100`}>
              <span className="mx-auto">{step>=2?" Confirm the registration":"Next"} </span> <span className="text-dark pe-3"><IoIosArrowRoundForward size={30}/></span>
              </button>
            </div>
          </div>
          </>
         }
        </div>
      </div>
    </div>
  );
};

export default Register;

const head = ["Personal info", "Investment info", "Account info"];

const invest = [
  {
    head: " which asset classe(s) are you most interest to invest in?",
    isSingle: true,
    isIcon: true,
    field: "interestedToInvest",
    option: [
      "Venture capital",
      "Private equity",
      " Stock market",
      " Structured products",
      " Real estat",
      " Crypto",
      "Private debt",
      "Infrastructure",
      " Indifferent",
      " Other",
    ],
  },
  {
    head: " Which sectors are you most attracted to?",
    isSingle: false,
    isIcon: false,
    field: "sectors",
    option: [
      "Agritech / foodtech",
      "Ai/Data science",
      " Biotech / medtech",
      " Blockchain / Web 3.0",
      " Cleantech",
      " Consumer and retail",
      " Cybersecurity",
      " Education",
      " Enterprise 2.0",
      "Fintech / Insurtech",
      "Gaming",
      " Health / Wellbeing",
      " Industry 4.0",
      " Logistics",
      "Mobility",
      "Software",
      "Smart society / IoT",
      "Space",
      " Cloud / Edge",
      "Other",
    ],
  },
  {
    head: "Which geographical regions are you most inclined to invest in?",
    field: "region",
    isSingle: true,
    isIcon: true,
    option: [
      " North America",
      "Latin America",
      "Europe",
      "Asia",
      "Africa",
      "Middle East",
      " Indifferent",
      "Other",
    ],
  },
  {
    head: " What is your investor profile regarding VC investments ?",
    field: "investorType",
    isSingle: true,
    isIcon: false,

    option: [
      "Agressive : Several tickets per year",
      " Concentrated, a few large tickets per year",
      "Balanced : medium ticket size for 3 to 5 investments per yea",
      "Balanced : medium ticket size for 3 to 5 investments per year",
      " Diversified : small tickets in over 5 companies per year",
      "Cautious : a few small tickets per year",
    ],
  },
  "fawknawek",
  {
    head: "What are you looking to get the most out of Anyma ",
    isSingle: false,
    isIcon: true,
    field: "anyma",
    option: [
      " Invest young companies with high potential",
      "Invest in mature tech champions",
      "Diversify my asset allocation",
      "Access to new geographies",
      " Learn about new fields",
      " Being able to monetize my expertise or network",
      "Create new professional connections",
      "Other",
    ],
  },
];
