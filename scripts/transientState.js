const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0

}

export const metalOptionChosen = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const sizeOptionChosen = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const styleOptionChosen = (chosenStyle) => {
    transientState.styleId= chosenStyle
    console.log(transientState)
}

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)

    }
console.log(postOptions)
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)

}