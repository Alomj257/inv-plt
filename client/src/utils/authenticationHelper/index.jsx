import { showToast } from "../toasters"

export const getAuth=()=>{
    try {
        return JSON.parse(localStorage.getItem('auth')||'');
    } catch (error) {
        console.log(error)
        showToast("error","somthing went wrong");
        return;
    }
}