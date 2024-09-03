import React, { useState } from 'react'
import "./pop.scss";
import { loginService } from '../../service/auth/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [val,setVal]=useState(null);
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {value,name}=e.target;
        setVal({...val,[name]:value});
    }

    const handleAdd=async()=>{
      const data=await loginService(val);
      console.log(data);
      if(data&&data?.user?.account?.role==="ADMIN"){
        navigate("/admin");
      }else{
        navigate("/customer");
      }
    }
  return (
    <div className='login-pop'>
        <div className="pop-body col-6">
            {/* <div className='text-end'> <BsX onClick={()=>setIsNew(pre=>!pre)} className='cursor-pointer' size={30}/></div> */}
            <h5 className='text-center mb-4 fs-4'>Sign In</h5>
            <div className='d-flex flex-column gap-4'>
                <div className="field">
                    <label htmlFor="">Username</label>
                    <input type="text" name='email' onChange={handleChange} className='input-field' placeholder='email' />
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' onChange={handleChange} className='input-field' placeholder='Password' />
                </div>
                <div className="text-center">
                    <button type='button' onClick={handleAdd} className="btn-red col-3 rounded-5">Login</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
