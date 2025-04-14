import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Utils/cartSlice"
import { useDispatch } from "react-redux"

const Cart = () => {
 const cartItems = useSelector((store) => store.cart.items)
 console.log(cartItems)


const  dispatch = useDispatch()

const handleClearCart = () => {
    dispatch(clearCart())
}

   
    return(

        
        <div className="flex flex-wrap flex-col">
        <div  className="flex flex-wrap justify-center m-5 font-bold text-amber-500"> Cart ({cartItems.length})
        
        <button className="p-2 m-2 bg-black text-white rounded-lg " onClick={handleClearCart}>Clear Cart</button>
        </div>
        
        
        <div className="flex flex-wrap justify-center m-2.5 p-2 ">


        <ItemList items = {cartItems}/>
        



        </div>
        </div>
        
    )
    

}
export default Cart