import {Component, OnInit} from '@angular/core';
import {BookCardComponent} from "../../components/book-card/book-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {PageResponseBookResponse} from "../../../../sevices/models/page-response-book-response";
import {BookService} from "../../../../sevices/services/book.service";
import {Router, RouterLink} from "@angular/router";
import {BookResponse} from "../../../../sevices/models/book-response";

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [
    BookCardComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit{
  bookResponse: PageResponseBookResponse={};
  protected page=0;
  private size=5;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.bookService.getAllBooksByOwner(
        {page: this.page, size: this.size}
    ).subscribe({
      next: (books)=>{
        this.bookResponse = books;
      }
    });
  }

  goToFirstPage() {
    this.page=0;
    this.findAllBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBooks();
  }

  goToPage(page: number) {
    this.page=page;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page=this.bookResponse.totalPages as number - 1;
    this.findAllBooks();
  }

  get isLastPage(): boolean{
    if(this.bookResponse.totalPages as number>0)
      return this.page===this.bookResponse.totalPages as number -1;
    else
      return true;
  }

  archiveBook(book: BookResponse) {
    this.bookService.updateArchivedStatus({
      'bookId': book.id as number,
    }).subscribe({
      next: ()=>{
        book.shareable =!book.shareable
      }
    })
  }

  shareBook(book: BookResponse) {
    this.bookService.updateSharableStatus({
      'bookId':book.id as number,
    }).subscribe({
      next:()=>{
        book.shareable=!book.shareable;
      }
    })
  }

  editBook(book: BookResponse) {
    this.router.navigate(['books', 'manage', book.id])
  }
}
