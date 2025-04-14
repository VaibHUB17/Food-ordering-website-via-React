import appStore from "../../Utils/appStore";
import Header from "../Header";
import { render ,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react";


it("shoud render header with a login button to logout button ",() => {

    render(
    <BrowserRouter>
        <Provider store = {appStore}>

    <Header/>
     </Provider>
    </BrowserRouter>
)

const loginButton = screen.getByRole("button" , {name : "Login"})

fireEvent.click(loginButton)

const logOutButton = screen.getByRole("button" , {name : "LogOut"})


expect(loginButton). toBeInTheDocument()

})




it("shoud render header with a login button ",() => {

    render(
    <BrowserRouter>
        <Provider store = {appStore}>

    <Header/>
     </Provider>
    </BrowserRouter>
)

const cartItems = screen.getByText("Cart -(0items)")

expect(cartItems). toBeInTheDocument()

})


// link is coming from react route dom its not js or react import browser router