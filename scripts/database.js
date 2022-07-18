
const database = {

    orderBuilder: {},

    paints: [
        { id: 1, color: "Silver", price: 650 },
        { id: 2, color: "Midnight Blue", price: 720 },
        { id: 3, color: "Firebrick Red", price: 711 },
        { id: 3, color: "Spring Green", price: 586 }
    ],
    interiors: [
        { id: 1, seats: "Beige Fabric", price: 650 },
        { id: 2, seats: "Charcoal Fabric", price: 720 },
        { id: 3, seats: "White Leather", price: 711 },
        { id: 3, seats: "Black Leather", price: 586 }
    ],
    technologies: [
        { id: 1, package: "Basic Package (basic sound system)", price: 3500 },
        { id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 3500 },
        { id: 3, package: "Visibility Package (includes side and reat cameras)", price: 5000 },        
        { id: 5, package: "Ultra Package (includes navigation and visibility packages)", price: 7500 }
    ],
    wheels: [
        { id: 1, tire: "17-inch Pair Radial", price: 650 },
        { id: 2, tire: "17-inch Pair Radial Black", price: 750 },
        { id: 3, tire: "18-inch Pair Spoke Silver", price: 1000 },
        { id: 5, tire: "18-inch Pair Spoke Black", price: 1100 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            technologyId: 2,
            wheelId: 3,
            timestamp: 1614659931693
        }
    ]
}


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
