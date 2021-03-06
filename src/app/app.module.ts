import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { PublishersComponent } from './publishers/publishers.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { EmtyComponent } from './components/emty/emty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookStoreComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    PublishersComponent,
    BookEditComponent,
    EmtyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
