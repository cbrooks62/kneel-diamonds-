import { placeOrder } from "./transientState.js"


const handleOrderPlacedClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrderButton") {
     placeOrder()
    }
}

export const saveOrderPlaced = () => {

document.addEventListener("click", handleOrderPlacedClick)

return "<div><button id ='saveOrderButton'>Place Order</button></div>"

}