const cart = [];

async function addItem(item) {
    cart.push(item)
}

async function listItems() {
    cart.forEach(i => {
        console.log(`Nome: ${i.name} - Preço: ${i.price} - Quantidade: ${i.quantity}`)
    })
}

async function removeItem(nameItem) {
    const index = cart.findIndex((i) => i.name == nameItem)
    if(index == -1){
        console.log("Item não encontrado")
        return 
    }

    if(cart[index].quantity > 1){
        cart[index].quantity--
        cart[index].subtotal -= cart[index].price
        return
    }

    if(cart[index].quantity == 1){
        console.log("Deletando item...")
        deleteItem(cart[index].name)
    }
}

async function deleteItem(nameItem) {
    const index = cart.findIndex((i) => i.name == nameItem )

    if (index != -1) {
        cart.splice(index, 1)
        return 
    }
    
    console.log("Item não encontrado!")
}

async function calculateTotal() {
    let totalPrice = 0;
    cart.forEach(i => {
        totalPrice += i.subtotal
    })
    return totalPrice
}

export {
    calculateTotal,
    deleteItem,
    addItem,
    removeItem,
    listItems
}

