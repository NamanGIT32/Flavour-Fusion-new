import React, { useEffect, useState } from "react";
const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnline= () =>{
            setIsOnline(true);
        };
        const handleOffline= () =>{
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOnline);
        }

        // return ( window.removeEventListener("online", handleOnline),    //--->This syntax is also correct just research and conform it.
        // window.removeEventListener("offline", handleOnline))
    },[]) 

    return isOnline;
}
export default useOnline;