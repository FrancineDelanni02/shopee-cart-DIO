const cart = [];

async function addItem(item) {
    if(item.qtdAvailable > 0){
        cart.push(item)
        item.qtdAvailable--;
        return
    }
    console.log("O estoque desse item está vazio")
}

async function listItems() {
   cart.forEach(i =>{
        console.log(`Nome: ${i.name} - Preço: ${i.price}`)
   })
}

async function removeItem(nameItem) {

}

async function deleteItem(nameItem) {
    console.log("Deleting item...")
}

async function calculateTotal() {
    console.log("Calculating total price...")
}

export {
    calculateTotal,
    deleteItem,
    addItem,
    removeItem,
    listItems
}

