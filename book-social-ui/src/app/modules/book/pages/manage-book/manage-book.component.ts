import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BookRequest} from "../../../../sevices/models/book-request";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {BookService} from "../../../../sevices/services/book.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-manage-book',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.scss'
})
export class ManageBookComponent implements OnInit{
  errorMsg:Array<string>=[];
  selectedBookCover: any;
  selectedPicture: string | undefined;
  bookRequest:BookRequest={authorName: "", isbn: "", synopsis: "", title: ""};

  constructor(private bookService: BookService, private router:Router, private activatedRoute: ActivatedRoute) {
  }

  onFileSelected(file: any) {
    this.selectedBookCover=file.target.files[0];
    console.log(this.selectedBookCover);
    if(this.selectedBookCover){
      const reader:FileReader=new FileReader();
      reader.onload=()=>{
        this.selectedPicture=reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
    }
  }

  saveBook() {
    this.bookService.saveBook({
      body: this.bookRequest
    }).subscribe({
      next:(res)=>{
        this.bookService.uploadBookCover({
          'bookId':res.data as number,
          body:  {
            file: this.selectedBookCover
          }
        }).subscribe({
          next:()=>{
            Swal.fire({
              icon: "success",
              title: "Book created successfully",
              confirmButtonText: 'Ok'
            }).then(()=>this.router.navigate(['books/my-books']));
          }
        })
      },
      error:(err)=>{
        Swal.fire({
          title: 'Error!',
          text: err.error.validationError,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    })
  }

  ngOnInit(): void {
    const bookId=this.activatedRoute.snapshot.params['bookId'];
    if(bookId){
      this.bookService.getBookById({
        'id': bookId
      }).subscribe({
        next : (res) =>{
          this.bookRequest={
            id: res.id,
            title: res.title as string,
            authorName: res.authorName as string,
            isbn: res.isbn as string,
            synopsis: res.synopsis as string,
            available: res.shareable
          }
          if(res.cover){
            this.selectedPicture='data:image/jpg;base64,'+res.cover;
          }
        },
        error: (err)=>{
          Swal.fire({
            title: 'Error!',
            text: err.error.validationError,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      })
    }
  }
}
