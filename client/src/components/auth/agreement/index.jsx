import React, { useState } from 'react'
import "./aggreement.scss";
import { BsX } from 'react-icons/bs';
import { showToast } from '../../../utils/toasters';

const AgreementPop = ({setIsNew,setAccount}) => {
const [agreement,setAgree]=useState(false);

const handleAgree=()=>{
        if(!agreement){
            showToast("error","accept agreement");
            return;
        }
        setAccount(pre=>({...pre,agreement}));
        setIsNew(false);
}

    return (
    <div className='agrreement'>
        <div className="pop-body col-md-5 ">
            <div className='text-end'> <BsX onClick={()=>setIsNew(pre=>!pre)} className='cursor-pointer' size={30}/></div>
            <div className='text-center col-md-10 mx-auto pb-3'>            
                <h5>By confirming the registration, you’re agreeing to</h5>
            <p className='fs-5 ' onClick={()=>setAgree(true)}><button className='text-dark btn text-decoration-underline' href="http://localhost:5173/">our terms and conditions</button></p>
            <div className="text-center"><button onClick={handleAgree} className="btn-red  w-100 rounded-5">Agree and confirm</button></div>
            </div>
        </div>
    </div>
  )
}

export default AgreementPop
