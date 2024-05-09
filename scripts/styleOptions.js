import { styleOptionChosen} from "./transientState.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        styleOptionChosen(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)

    let styleHTML = ""
    const divStringArray = styles.map(
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    styleHTML += divStringArray.join("")

    return styleHTML
}