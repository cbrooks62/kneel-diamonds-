import { sizeOptionChosen} from "./transientState.js"

const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        sizeOptionChosen(parseInt(event.target.value))
    }
}


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)

    let sizeHTML = ""
    const divStringArray = sizes.map(
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets} carets
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    sizeHTML += divStringArray.join("")

    return sizeHTML
}