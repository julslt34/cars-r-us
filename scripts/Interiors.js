import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()



document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "interiors") {
           
            setInterior(parseInt(clickEvent.target.value))
        }
    }
)


export const Interiors = () => {
    let html = "<h2><br></h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select an interior material</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.seats}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}