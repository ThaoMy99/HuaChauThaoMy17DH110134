import { Book } from './../../models/book.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book | any;
  @Input() index: number | any;
  @Output() bookSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
