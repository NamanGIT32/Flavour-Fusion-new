import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error = useRouteError();
    const {status,statusText}= error;
    console.log(error);
    return(
        <>
            <h1>Oops it's an error...!!!</h1>
            <h2>{status + " " + statusText}</h2>
        </> 
    )
};
export default Error;   