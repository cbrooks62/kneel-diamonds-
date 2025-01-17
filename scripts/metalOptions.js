import { metalOptionChosen} from "./transientState.js"

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        metalOptionChosen(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)

    let metalHTML = ""
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    metalHTML += divStringArray.join("")

    return metalHTML
}