import { render, screen} from "@testing-library/react";
import ReastrauntCard from "../ReastrauntCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../ReastrauntCard";

it("should render Reastaurant component with props Data",() =>{

    
    const RestaurantCardPromoted = withPromotedLabel(ReastrauntCard)

    render(<RestaurantCardPromoted resData ={MOCK_DATA}/>)

    

    const name = screen.getByText("Best India Ice Cream")

    expect(name).toBeInTheDocument();

    const promotedLabel = screen.getByText("Promoted")

    expect(promotedLabel).toBeInTheDocument()




})