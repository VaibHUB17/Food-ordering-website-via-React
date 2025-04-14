import React, { StrictMode,lazy, useEffect } from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy,Suspense  } from "react";
import userContext from "./Utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";


//chunking/code splitting/dynamic bundling/lazy loading/ondemamd loading
//how and when to make this smaller bundles??

const Grocery = lazy(() =>import("./components/Grocery"))



const AppLayout =()=>{


  //authentication

  const [userName,setUserName] =useState()

  useEffect(()=> {
    //make an api call and send username and password

    const data ={
      name: "Vaibhav Shivhare"
    };
    setUserName(data.name)
  }, [])


  
  return (

    <Provider store = {appStore}>

    
    <userContext.Provider value = {{loggedInUser: userName,setUserName}}>
      

    <div className="app">
    
 

        <Header />
    
      <Outlet />
     
    </div>
    </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
{
    path:"/",
    element:<AppLayout/>,

    children:[
        {
            path:'/',
            element:<Body/>
        },
        {
        path :"/about",
        element:<About/>
    }, {
        path:'/Contact',
        element:<Contact/>
    },{
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
    
    }
    ,{
        path:'/grocery',
        element: <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery/>
            </Suspense>
    
    },
    { path: "/Cart",
      element:<Cart/>

    }
     ],
      
    errorElement:<Error/>
}
])
  
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>

);



