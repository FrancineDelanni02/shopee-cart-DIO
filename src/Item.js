class Item {
    name
    price
    quantity
    qtdAvailable

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.qtdAvailable = quantity;
    }
}

export default Item