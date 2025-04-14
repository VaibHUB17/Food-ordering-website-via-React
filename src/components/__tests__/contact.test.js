import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'


describe("",() =>{

    test("should load contact us component", () => {
        render(<Contact/>)
        
        const button = screen.getByText("Submit")
        
        expect(button).toBeInTheDocument()
        
    })
    test("should load contact us component", () => {
        render(<Contact/>)
        
        const inputname = screen.getByPlaceholderText("name")
        
        expect(inputname).toBeInTheDocument()
        
    })
    
    
    test("should load 2 input boxes on component",()=>{
        render(<Contact/>)
        
        const inputBoxes = screen.getAllByRole("textbox")
        
        console.log(inputBoxes.length)
        
        
        expect(inputBoxes.length).toBe(2)
    } 
    
    
    
)
})