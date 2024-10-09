import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../sevices/services/book.service";
import {Router} from "@angular/router";
import {PageResponseBookResponse} from "../../../../sevices/models/page-response-book-response";
import {NgForOf, NgIf} from "@angular/common";
import {BookCardComponent} from "../../components/book-card/book-card.component";
import {BookResponse} from "../../../../sevices/models/book-response";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    NgForOf,
    BookCardComponent,
    NgIf
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit{
  bookResponse: PageResponseBookResponse={};
  protected page=0;
  private size=5;
  message:string='';
  level:string='success'
  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.bookService.getAllBooks(
        {page: this.page, size: this.size}
    ).subscribe({
      next: (books)=>{
        console.log(books);
        this.bookResponse = books;
      },
      error: (err) => {
        this.message = err.message;
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

  borrowBook(book: BookResponse) {
    this.message='';
    this.bookService.borrowBook({
      'bookId': book.id as number
    }).subscribe({
      next: ()=>{
        this.level='success';
        this.message='Book successfully added to your list';
      },
      error:(err)=>{
        this.level='error';
        this.message=err.error.error;
      }
    })
  }
}
