export class Produit {
    id: number;
    name: string;
    price: number;
    tags: string[];

    constructor(id: number, name: string, price: number, tags: string[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.tags = tags;
    }
}
