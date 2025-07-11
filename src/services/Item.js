async function createItem(name,price,quantity){
    return {
        name,
        price,
        quantity,
        subtotal: quantity * price,
    }
}

export default createItem;