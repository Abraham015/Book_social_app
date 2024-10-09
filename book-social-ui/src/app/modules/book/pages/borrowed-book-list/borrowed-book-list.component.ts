import {Component, OnInit} from '@angular/core';
import {PageResponseBorrowedBookResponse} from "../../../../sevices/models/page-response-borrowed-book-response";
import {NgForOf, NgIf} from "@angular/common";
import {BorrowedBookResponse} from "../../../../sevices/models/borrowed-book-response";
import {BookService} from "../../../../sevices/services/book.service";
import {FeedbackRequest} from "../../../../sevices/models/feedback-request";
import {FormsModule} from "@angular/forms";
import {RatingComponent} from "../../components/rating/rating.component";
import {FeedbackService} from "../../../../sevices/services/feedback.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-borrowed-book-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    RatingComponent
  ],
  templateUrl: './borrowed-book-list.component.html',
  styleUrl: './borrowed-book-list.component.scss'
})
export class BorrowedBookListComponent implements OnInit{
  borrowedBooks: PageResponseBorrowedBookResponse={};
  page:number=0;
  size:number=5;
  feedbackRequest:FeedbackRequest={bookId:0, comment:'', note: 0};
  selectedBook: BorrowedBookResponse | undefined=undefined;

  constructor(private bookService:BookService, private feedbackService: FeedbackService) {
  }

  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook=book;
    this.feedbackRequest.bookId=book.id as number;
  }

  ngOnInit(): void {
    this.findAllBorrowedBooks();
  }

  private findAllBorrowedBooks() {
    this.bookService.getAllBorrowedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next:(res)=>{
        this.borrowedBooks=res;
      }
    });
  }

  goToFirstPage() {
    this.page=0;
    this.findAllBorrowedBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBorrowedBooks();
  }

  goToPage(page: number) {
    this.page=page;
    this.findAllBorrowedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBorrowedBooks();
  }

  goToLastPage() {
    this.page=this.borrowedBooks.totalPages as number - 1;
    this.findAllBorrowedBooks();
  }

  get isLastPage(): boolean{
    if(this.borrowedBooks.totalPages as number>0)
      return this.page===this.borrowedBooks.totalPages as number -1;
    else
      return true;
  }

  returnBook(withFeedback: boolean) {
    this.bookService.returnBook({
      'bookId': this.selectedBook?.id as number
    }).subscribe({
      next: ()=>{
        Swal.fire({
          icon: "success",
          title: "Book returned successfully",
          confirmButtonText: 'Ok'
        }).then(()=>{
          if(withFeedback){
            this.giveFeedback();
          }else{
            this.selectedBook=undefined;
            this.findAllBorrowedBooks();
          }

        });
      },
      error: ()=>{
        Swal.fire({
          title: 'Error!',
          text: 'Error returning book',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    })
  }

  private giveFeedback() {
    this.feedbackService.saveFeedback({
      body: this.feedbackRequest
    }).subscribe({
      next:()=>{
        Swal.fire({
          icon: "success",
          title: "Feedback saved successfully",
          confirmButtonText: 'Ok'
        });
        this.selectedBook=undefined;
        this.findAllBorrowedBooks();
      }
    });
  }
}
