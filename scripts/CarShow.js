import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id==="orderButton"){
            addCustomOrder();
        }
    }
)

export const CarShow = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__interiors options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Place Car Order</h2>
         </article> 
         <article>
         <section class="result">
                ${Orders()}  
            </section>         
         </article>
           `
}

