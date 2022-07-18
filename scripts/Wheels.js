import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()


document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "wheels") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setWheel(parseInt(clickEvent.target.value))
        }
    }
)


export const Wheels = () => {
    // let html = "<h2>Wheels</h2>"
let html = "<h2><br></h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel style</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.tire}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}