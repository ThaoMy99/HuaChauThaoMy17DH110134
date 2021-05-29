import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private books: Book[] = [
    new Book(
      'B001',
      'đắc nhân tâm',
      20,
      'Đắc nhân tâm (được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, có ảnh hưởng thay đổi cuộc đời đối với hàng triệu người trên thế giới.'
    ),
    new Book(
      'B002',
      'nhà giả kim',
      30,
      'Nhà giả kim (tiếng Bồ Đào Nha: O Alquimista) là một cuốn sách được xuất bản lần đầu ở Brasil năm 1988 và là cuốn sách nổi tiếng nhất của nhà văn Paulo Coelho. Nó được dịch ra 67 ngôn ngữ và bán ra tới 95 triệu bản (Theo thống kê ngày 19.5.2008), trở thành một trong những quyển sách bán chạy nhất mọi thời đại.[1] Đây là một câu chuyện thúc giục độc giả theo đuổi giấc mơ của mình.'
    ),
    new Book(
      'B003',
      'tội ác và trừng phạt',
      50,
      'Tội ác và hình phạt (tiếng Nga: Преступление и наказание) là một tiểu thuyết của nhà văn Nga Fyodor Mikhailovich Dostoyevsky. Tiểu thuyết này cùng với Anh em nhà Karamazov là hai tác phẩm nổi tiếng nhất của Dostoevsky. Tạp chí Times đã bình chọn Tội ác và hình phạt là một trong số những cuốn sách vĩ đại nhất mọi thời đại[1].'
    ),
  ];
  bookSelected = new EventEmitter<Book>();
  constructor() {}
  getBooks() {
    return this.books;
  }
  getBook(index: number) {
    return this.books[index];
  }
}
