import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PageResponseBorrowedBookResponse} from "../../../../sevices/models/page-response-borrowed-book-response";
import {FeedbackRequest} from "../../../../sevices/models/feedback-request";
import {BorrowedBookResponse} from "../../../../sevices/models/borrowed-book-response";
import {BookService} from "../../../../sevices/services/book.service";
import {FeedbackService} from "../../../../sevices/services/feedback.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-return-books',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './return-books.component.html',
  styleUrl: './return-books.component.scss'
})
export class ReturnBooksComponent implements OnInit{
    returnedBooks: PageResponseBorrowedBookResponse={};
    page:number=0;
    size:number=5;
    selectedBook: BorrowedBookResponse | undefined=undefined;

    constructor(private bookService:BookService) {
    }

    ngOnInit(): void {
        this.findAllReturnedBooks();
    }

    private findAllReturnedBooks() {
        this.bookService.getAllReturnedBooks({
            page: this.page,
            size: this.size
        }).subscribe({
            next:(res)=>{
                this.returnedBooks=res;
            }
        });
    }

    goToFirstPage() {
        this.page=0;
        this.findAllReturnedBooks();
    }

    goToPreviousPage() {
        this.page--;
        this.findAllReturnedBooks();
    }

    goToPage(page: number) {
        this.page=page;
        this.findAllReturnedBooks();
    }

    goToNextPage() {
        this.page++;
        this.findAllReturnedBooks();
    }

    goToLastPage() {
        this.page=this.returnedBooks.totalPages as number - 1;
        this.findAllReturnedBooks();
    }

    get isLastPage(): boolean{
        if(this.returnedBooks.totalPages as number>0)
            return this.page===this.returnedBooks.totalPages as number -1;
        else
            return true;
    }

    approveBookReturn(book: BorrowedBookResponse) {
        if(!book.returned){
            Swal.fire({
                title: 'Error!',
                text: 'Book has not been returned',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }
        this.bookService.approveReturnBook({
            'bookId': book.id as number
        }).subscribe({
            next: ()=>{
                Swal.fire({
                    icon: "success",
                    title: "Return approved successfully",
                    confirmButtonText: 'Ok'
                }).then(()=>this.findAllReturnedBooks());
            },
            error: ()=>{
                Swal.fire({
                    title: 'Error!',
                    text: 'Approval failed',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        })
    }
}
