
import Body from "../Body"
import { render } from "@testing-library/react"
import {MOCK_DATA} from "../mocks/mockResListData.json"


global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=> {
        return Promise.resolve(MOCK_DATA)
    }
  })   
} )


it("render body component",() =>{

    render(<Body/>)
})

