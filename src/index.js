import * as cart from "./Cart.js";
import createItem from "./Item.js";

let item1 = await createItem("Mouse",20.00,4)
await cart.addItem(item1)
let item2 = await createItem("Casaco",35.00,2)
await cart.addItem(item2)
let item3 = await createItem("Teclado",40.00,1)
await cart.addItem(item3)

await cart.removeItem("Mouse")
await cart.listItems();
console.log("----------------------")
cart.listItems();
const price = await cart.calculateTotal();
console.log("Preço dos produtos no carrinho: "+price)

