import { MetalOptions } from './metalOptions.js'
import { StyleOptions } from './styleOptions.js'
import { SizeOptions } from './sizeOptions.js'
import {saveOrderPlaced} from './orders.js'
import { Orders } from './placedOrders.js'


const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const orderHTML = await saveOrderPlaced()
    const newOrdersPlacedHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
                ${orderHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${newOrdersPlacedHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})