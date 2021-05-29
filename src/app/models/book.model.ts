export class Book {
  id: string;
  name: string;
  price: number;
  description?: string;
  constructor(id: string, name: string, price: number, des?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = des;
  }
}
