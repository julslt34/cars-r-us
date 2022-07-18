
import { getOrders, getPaints, getInteriors, getTechnologies, getWheels} from "./database.js"

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

// code prior to added price code
const buildOrderListItem = (order) => {
   
const chosenPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)

const chosenInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
)

const chosenTechnology = technologies.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)

const chosenWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)

const totalCost = chosenPaint.price + chosenInterior.price + chosenTechnology.price + chosenWheel.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li> ${chosenPaint.color} car with ${chosenWheel.tire} wheels, ${chosenInterior.seats}, and the ${chosenTechnology.package} for a total cost of ${costString} </li>`

 
}

 
export const Orders = () => {
    
  const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


