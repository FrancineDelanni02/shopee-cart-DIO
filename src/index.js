import * as cart from "./services/Cart.js";
import createItem from "./services/Item.js";
import * as wishList from "./services/WishList.js";

//Criando itens para teste e adicionando no carrinho
let item1 = await createItem("Mouse",20.00,4)
await cart.addItem(item1)
let item2 = await createItem("Casaco",35.00,2)
await cart.addItem(item2)
let item3 = await createItem("Teclado",40.00,1)
await cart.addItem(item3)

console.log("Listando itens do carrinho e verificando o preço antes de remover")
await cart.listItems();
let price = await cart.calculateTotal();
console.log("Preço dos produtos no carrinho: "+price)

//Teste de remoção de item
await cart.removeItem("Mouse")
console.log("----------------------")

console.log("Listando os itens do carrinho e verificando o preço depois de remover")
cart.listItems();
price = await cart.calculateTotal();
console.log("Preço dos produtos no carrinho: "+price)

//Testando deletar um item do carrinho
await cart.deleteItem("Teclado")
console.log("-------------------------")

console.log("Listando os itens do carrinho e verificando o preço depois de deletar")
cart.listItems();
price = await cart.calculateTotal();
console.log("Preço dos produtos no carrinho: "+price)

//Adicionando itens na Wish List
wishList.addItem(item1)
wishList.addItem(item2)

console.log("-----------------------------")
console.log("Listando itens dentro da Wish List")
wishList.listItems();

