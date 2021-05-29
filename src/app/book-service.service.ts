import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private books: Book[] = [
    new Book('B001', 'đắc nhân tâm', 20),
    new Book('B002', 'nhà giả kim', 30),
    new Book('B003', 'tội ác và trừng phạt', 50),
  ];
  constructor() {}
  getBooks() {
    return this.books;
  }
}
