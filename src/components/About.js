import User from "./User" 
import UserClass from "./UserClass"
import React from "react"
 
//  const  About =() =>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>this is namaste react web series</h2>
//             {/* <User name={"akshay Saini {function}"}/> */}
//             <UserClass name={"vaibhav {class}"}location ={"dehradun class"}/>
//         </div>
//     )
//  }



class About extends React.Component{
    constructor(props) {
        super(props);

    }



    render(){
        return(
            <div>
            <h1>About Us</h1>
            <h2>this is namaste react web series</h2>

            {/* <User name={"akshay Saini {function}"}/> */}

            <UserClass name={"vaibhav {class}"}location ={"dehradun class"}/>
            
        </div>
        )
    }




}


 export default About


 