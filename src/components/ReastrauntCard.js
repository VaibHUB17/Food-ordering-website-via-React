import {CDN_URL} from "../Utils/constants"
import userContext from "../Utils/UserContext"
import { useContext } from "react"



//inline styles of css in react jsx


const ReastrauntCard = (props)=>{

    const {resData} =props

    console.log(resData)
    

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime,sla} =resData?.info
    const {loggedInUser} =useContext(userContext) 
    
    return( 
        <div className="m-5 p-6 w-[250px] h-[500px]  rounded-lg flex flex-col bg-gray-100 hover:bg-gray-300 hover:outline-2 outline-gray-400 hover:pop" >

<img
        className="object-cover rounded-lg h-[60%] max-w-[100%]"
        src={
          CDN_URL+
          cloudinaryImageId
        }
        
      />
          
            <h1 className=" font-bold py-3 text-lg tru" >{name}</h1>
            <div className="details">

            <button className=" bg-green-600 text-amber-50 font-sans  px-2 py-1 rounded-xl"> {avgRating}</button>
            <h4 className="text-gray-700 truncate">{cuisines.join(", ")}</h4>
            
            <h4 className= "timings">{sla.deliveryTime} minutes</h4>
            <h4 className= "timings">{costForTwo}</h4>
            <h4 className= "timings">USER:{loggedInUser}</h4>
            </div>

        </div>




)


}


//higher order component
//input -restaurantCard ==>> restrocardpromoted

 export const withPromotedLabel = (ReastrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white rounded-lg m-2 p-1">Promoted</label>
        <ReastrauntCard {...props}/>
      </div> 
    )
  }
}


export default ReastrauntCard