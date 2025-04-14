import { useDispatch } from "react-redux"
import { CDN_URL } from "../Utils/constants"
import { addItem  } from "../Utils/cartSlice"

const ItemList =({items , dummy}) => {
    console.log(items)
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        //dispatch and action
        dispatch (addItem(item))

    }
    
    return(
        <div className="flex flex-wrap flex-col">
            
                {items.map(item => 
                <div key = {item.card.info.id}  className="p-2 m-2 px-4 py-2 border-b-2 border-gray-200 flex-col"> 


                    
                    

                    <div  className="p-2 text-left flex justify-between "> 
                        <span className="font-semibold text-sm content-around ">{item.card.info.name}
                        
                            {/*price with ternary operation*/}
                            <span className="text-amber-500">
                          {" ₹"}      
                         {item.card.info.price 
                        ? item.card.info.price/100 
                        : item.card.info.defaultPrice/100 }
                        </span>   

                        <p className="p-2 font-light text-xs  text-left">{item.card.info.description}</p>
                        </span>

                       <div className=" flex flex-col-reverse items-center ">

                           <div className="absolute">
                           <button className="p-1  bg-white text-green-700 font-bold shadow-lg rounded-xl align font-roboto "
                           
                           onClick={() => handleAddItem(item)}
                           >
                            ADD +</button>

                           </div>

                           <img className="max-w-170 h-25  mt-10 object-cover m-2 " src ={CDN_URL + item.card.info.imageId}/>
                           

                           
                           </div> 

                        
                        
                            
                       

                       
                    </div>

                </div>
                
            )}
            </div>
       
    )
}


export default ItemList


