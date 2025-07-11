const wishList = [];

async function addItem(item){
    wishList.push(item)
}

async function listItems() {
    wishList.forEach(i => {
        console.log(`Nome: ${i.name} - Preço: ${i.price} - Quantidade: ${i.quantity}`)
    })
}


async function deleteItem(nameItem) {
    const index = wishList.findIndex((i) => i.name == nameItem )

    if (index != -1) {
        wishList.splice(index, 1)
        return 
    }
    
    console.log("Item não encontrado!")
}

export {
    addItem,
    listItems
}