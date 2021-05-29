import { Book } from './../models/book.model';
import { BookServiceService } from './../book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css'],
})
export class BookStoreComponent implements OnInit {
  selectedBook: Book | any;
  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.bookService.bookSelected.subscribe((res: Book) => {
      this.selectedBook = res;
    });
  }
}
