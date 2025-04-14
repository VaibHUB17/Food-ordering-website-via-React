const Contact =() => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact me Page</h1>

            <form>

                <input type= "text" className=" border border-black p-2 m-2" placeholder="name"></input>
                <input type= "text" className=" border border-black p-2 m-2" placeholder="message"></input>
                
                <button className=" font-bold rounded-lg  bg-gray-300 m-2 p-2"> Submit</button>

            </form>

        </div>
    )
}

export default Contact