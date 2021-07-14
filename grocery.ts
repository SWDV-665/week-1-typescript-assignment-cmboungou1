// Week 1 | TypeScript Assignment 
class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

let list_of_items = [
    new Grocery("water", 2, 10),
    new Grocery("bread", 5, 25),
    new Grocery("eggs", 12, 10)
]

const ele = document.getElementById("app");

list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} => $${e.price}`;
    ele.appendChild(p);
});