import logo from '../log.png'
import { useEffect, useState, useContext   } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus'
import userContext from '../Utils/UserContext'
import { useSelector } from 'react-redux'

const Header =()=>{

    

    const[btnNameReact, setbtnNameReact] =useState('Login')
    //pssing default variable
    // console.log("header render") 
    // to proof that the react rerenders the whole component of header and not just the login button 
    // click the login  button then the goonna rerender with updated value.
    


    const onlinestatus = useOnlineStatus()

    const {loggedInUser} = useContext(userContext)
   // console.log(loggedInUser)



    //selector
    const cartItems = useSelector((store) => store.cart.items)
    //console.log(cartItems)


    return (
        <div className="flex justify-between shadow-lg pt-2 w-full 
         sm:bg-gray-100 bg-yellow-200  ">
            <div className="logo-container">
            <img className="w-25"src={logo} alt="My Logo" />
                

            </div>

            <div className ="nav-items flex items-center ">
                <ul className='flex p-4 m-4 font-semibold'>
                    <li className='px-2.5'>
                        Status:{  onlinestatus ? "🟢" :"oops" }
                    </li>
                    <li className='px-2.5'><Link to ="/">Home</Link></li>
                     <li className='px-2.5'>
                        <Link to = "/about">About Us</Link>
                    </li>
                    <li className='px-2.5' ><Link to ="/Contact">contact Us </Link></li>
                    <li className='px-2.5'>
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    
                    <li className='px-2.5'>
                       <Link to = "/Cart"> Cart -({cartItems.length}items)
                       </Link> 
                       </li>
                    <li>
                    <button className=" bg-amber-500 hover:bg-amber-700 text-white font-bold py-1.5 px-5 rounded -mt-1" onClick={()=>{

                        btnNameReact==='Login'
                        ? setbtnNameReact("LogOut") 
                        :setbtnNameReact("Login")
                        console.log(btnNameReact)
                    }}>{btnNameReact}</button>
                    </li>

                    <li className='px-2.5 font-bold'>{loggedInUser}</li>
                    
                </ul>
                
            </div>
            

        </div>
    )
    
}

export default Header
