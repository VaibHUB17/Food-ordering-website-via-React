// to things to remember to write custom hook like in preivous one we know the input is resID and output is resInfo 

import { useEffect,useState } from "react";

const useOnlineStatus = () =>{
 
    //check if online 

    const [onlinestatus,setonlinestatus] = useState(true)

    useEffect(() => {

        window.addEventListener("online", () =>{

            setonlinestatus(true)

        })
        window.addEventListener("offline", () =>{

            setonlinestatus(false)

        })

    },[])




    //boolean value
    return onlinestatus;
}


export default useOnlineStatus