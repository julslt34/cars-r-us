import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "paints") {
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
            setPaint(parseInt(clickEvent.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<h2><br></h2>"

    html += '<select id="paints">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}




// document.addEventListener(
//     "change",
//     (clickEvent) => {
//         if (clickEvent.target.id === "paint") {
//             // const chosenOption = changeEvent.target.value
//             // console.log(chosenOption)  // "1" or "2"
//             setPaint(parseInt(clickEvent.target.value))
//         }
//     }
// )