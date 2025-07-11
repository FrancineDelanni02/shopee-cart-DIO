import * as cart from "./Cart.js";
import createItem from "./Item.js";

let item1 = createItem("Mouse",20.00,4)
cart.addItem(item1)
let item2 = createItem("Casaco",35.00,2)
cart.addItem(item2)
let item3 = createItem("Teclado",40.00,1)
cart.addItem(item3)
cart.listItems();
console.log("----------------------")
cart.listItems();
const price = await cart.calculateTotal();
console.log("Preço dos produtos no carrinho: "+price)

