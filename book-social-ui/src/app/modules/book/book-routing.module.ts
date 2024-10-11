import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {BookListComponent} from "./pages/book-list/book-list.component";
import {MyBooksComponent} from "./pages/my-books/my-books.component";
import {ManageBookComponent} from "./pages/manage-book/manage-book.component";
import {BorrowedBookListComponent} from "./pages/borrowed-book-list/borrowed-book-list.component";
import {ReturnBooksComponent} from "./pages/return-books/return-books.component";
import {AuthGuard} from "../../sevices/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: '',
        component: BookListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my-books',
        component: MyBooksComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manage',
        component: ManageBookComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manage/:bookId',
        component: ManageBookComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my_borrow_books',
        component: BorrowedBookListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my_return_books',
        component: ReturnBooksComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

export const bookRoutes: Routes = routes;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
