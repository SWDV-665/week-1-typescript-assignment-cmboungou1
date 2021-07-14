// Week 1 | TypeScript Assignment 
class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(nm: string, qt: number, pc: number){
        this.name = nm;
        this.quantity = qt;
        this.price = pc;
    }
}

let g_items = [
    new Grocery("water", 2, 10),
    new Grocery("bread", 5, 6),
    new Grocery("eggs", 12, 15)
]

const app = document.getElementById("appId");

g_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} = $${e.price}`;
    app.appendChild(p);
});