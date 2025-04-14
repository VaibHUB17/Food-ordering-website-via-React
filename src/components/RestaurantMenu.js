// import { useEffect, useState } from "react"
// import { MENU_URL } from "../Utils/constants"


import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../Utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategories"
import { useState } from "react"



const RestaurantMenu =() =>{

    const {resId} =useParams()
    
    //custom hooks
    const resInfo = useRestaurantMenu(resId)

    const [showIndex , setshowIndex] = useState(null)
    



    if (resInfo===null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card.info
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 




    //for creating restro categories
    //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.['card']?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') 







    return(
        <div className="m-4 p-4 flex flex-wrap flex-col text-center ">


            <div className="">
            <h1 className="font-bold font-sans text-3xl mb-4 ">{name}</h1>
            <h3 className="">{cuisines.join(", ")}</h3>
            <p>{costForTwoMessage}</p>
            </div>


            {/* categories accordians */}

            {categories.map((category, index) => (
                
            //controlled component
            <RestaurantCategory 
            key = {category?.card?.card.title}
            data = {category?.card?.card}

            showItems ={index === showIndex ? true   :
                false}
            setshowIndex={() => setshowIndex( prevIndex=> prevIndex=== index ?null : index )}
            />))}

           
          

 

        </div>
    )







    
    


}


export default RestaurantMenu