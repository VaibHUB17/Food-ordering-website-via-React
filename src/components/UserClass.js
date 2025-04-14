import React from "react"

class UserClass extends React.Component
{

    constructor(props) {

        
        super(props)

        this.state ={
           


            userInfo:{
                name : "dummy",
                location: "Default",
                avatar_url: "dummy"
            }


        }
          
      
         
    }

    async componentDidMount(){
        

        const data = await fetch("https://api.github.com/users/VaibHUB17")  
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo: json
        })



        
    }

    render(){
        console.log("child render is called")
        
        const {count} = this.state


        const{name,location,avatar_url} =this.state.userInfo

        return(
        <div className="user-card">
            <h1>Count : {count }</h1>
            
            
            <button onClick={() =>{
                //  NEVER UPDATE STATE VARIABLES DIRECTLY

                this.setState({
                    count: this.state.count +1,
                    count1: this.state.count1 +1
                })

 

            }}> count increse</button>
    

        <h2>name:{name}</h2>
        <h4>Location :{location}</h4>
         <img src= {avatar_url}/>
        <h4>Contact: vaibhav123</h4>
        </div>
        )
    }
} 

 
export default UserClass
 