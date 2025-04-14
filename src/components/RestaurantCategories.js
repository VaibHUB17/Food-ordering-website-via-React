import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory =({data , showItems, setshowIndex}) =>{

  

   


   
    

    return (
        
            

            <div className="lg:8/12 sm:w-6/12  w-12/12 m-auto  bg-gray-100 shadow-lg p-4 flex justify-between flex-col cursor-pointer mb-4" onClick={setshowIndex} >
                
                <div className="flex justify-between">

                <span className="font-semibold">{data?.title } ({data.itemCards.length})</span>

                <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black mt-2 "></span>
                </div>

            { showItems && <ItemList items ={data.itemCards}/>}
            </div>


       

    )
}


export default RestaurantCategory