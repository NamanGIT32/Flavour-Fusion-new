import {toast} from "react-toastify";
import axios from 'axios';

const api = axios.create({
    baseURL:`${process.env.REACT_APP_API_URL}/auth`,
});


export const googleAuth = (code) =>
    api.get(`/google?code=${code}`);
 
    

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position:"top-right",
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position:"top-right",
    })
}
