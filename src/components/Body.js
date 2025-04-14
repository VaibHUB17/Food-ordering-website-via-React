import ReastrauntCard from "./ReastrauntCard"
//import resList from "../Utils/mockData" 
import { useState, useEffect} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
import { withPromotedLabel } from "./ReastrauntCard"
import { useContext } from "react"
import userContext from "../Utils/UserContext"



const Body =() =>{

//* (local) State variable - super powerful variable

//const [listOfRestaurants, setListOfRestaurants] = useState(resList)
const [listOfRestaurants, setListOfRestaurants] = useState([]) //array destructing hai ye similar too
// const arr = usestate(reslist)
// consr[restro,setofrestro] =arr 

//or say its like 
// const[listofrestro] =arr[0]
// const[setlistofrestro] =arr[0]

//setlistofrestrount([]) -to make the list empty
 

const[filteredRestaurant,setFilteredRestaurant] =useState([])
//creating it for filterrestros cause of search bug ki after filtering from search we can't filter again from there(anything else to filter search)

//searchfilter 
const[searchText, setSearchText] =useState(" ")

console.log(listOfRestaurants)

const RestaurantCardPromoted =withPromotedLabel(ReastrauntCard)





useEffect(() => {
  fetchData();
}, []);

 
const fetchData = async () => {
  const data = await fetch(
    // 'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.237386&lng=78.17973&carousel=true&third_party_vendor=1'
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
  ); 

  const json = await data.json();

  console.log(json);
  //optional chaining
  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}; 



//online status 
const onlinestatus = useOnlineStatus()

if (onlinestatus === false) 
  return (<h1> you are Offline</h1>)



const {loggedInUser, setUserName} = useContext(userContext)

    
  return listOfRestaurants?.length === 0?  <Shimmer/> :(
        <div className="Body">
           
            <div className="flex justify-center">
              <div className="m-4 p-4">
                <input type="text" placeholder="Search..." className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[500px]" value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value)
                }}
                />

                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50  "
                  onClick={()=>{

                  //filter the restro cards and updates the UI
                  //searchText

                  console.log(searchText)

                  const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
  
                  setFilteredRestaurant(filteredRestaurant);
                }}
                >Search</button>
              </div>


              
                <button className=" bg-green-600 text-amber-50 mb-7 mt-8 px-4 py-2   rounded-2xl "
                //filter logic here 
                onClick={() => {
                  // * Filter logic
                  const filteredList = listOfRestaurants.filter(
                    (res) => parseFloat(res.info.avgRating) > 4
                  );
    
                  setFilteredRestaurant(filteredList);
                  console.log(filteredList);
                }}>Rated 4.2+
                    </button>


                    

                    
            
                  


            </div>

            <div className="search m-4 p-4 flex items-center">
          <label htmlFor= "name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

            <div className=" flex flex-wrap justify-center ">
               
            {filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} 
               to={"/restaurants/" + restaurant.info.id}>

                
                {restaurant.info.romoted
? (
                  <RestaurantCardPromoted resData={restaurant}/>
                )
                :(
                <ReastrauntCard  resData={restaurant}/>
                )                  
                }

              </Link>
                ))
                }
             
            </div> 
        </div>

        
    )
}


export default Body
