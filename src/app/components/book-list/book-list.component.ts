import { BookServiceService } from './../../book-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] | any;
  constructor(
    private bookService: BookServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onNewBook() {
    // this.router.navigate(['new'], { relativeTo: this.route });
  }
}
