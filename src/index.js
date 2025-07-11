import * as cart from "./Cart.js";
import Item from "./Item.js";

let item1 = new Item("Mouse",20.00,4)
cart.addItem(item1)
cart.listItems();
