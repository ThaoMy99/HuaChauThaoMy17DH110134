import { BookStoreComponent } from './book-store/book-store.component';
import { PublishersComponent } from './publishers/publishers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { EmtyComponent } from './components/emty/emty.component';

const routes: Routes = [
  { path: '', redirectTo: '/bookstore', pathMatch: 'full' },
  { path: 'bookstore', component: BookStoreComponent },
  { path: 'bookslist', component: BookListComponent },
  { path: 'publishers', component: PublishersComponent },
  {
    path: 'bookstore',
    component: BookStoreComponent,
    children: [
      { path: '', component: EmtyComponent },
      { path: 'new', component: BookEditComponent },
      { path: ':id', component: BookDetailComponent },
      { path: ':id/edit', component: BookEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
