const cart = [];

async function addItem(item) {
    cart.push(item)
}

async function listItems() {
    cart.forEach(i => {
        console.log(`Nome: ${i.name} - Preço: ${i.price}`)
    })
}

async function removeItem(nameItem) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == nameItem) {
            cart.splice(i, 1)
            return
        }
    }
}

async function deleteItem(nameItem) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == nameItem) {
            cart.splice(i, 1)
            i--
        }
    }
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

