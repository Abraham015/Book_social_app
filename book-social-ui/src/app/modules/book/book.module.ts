import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, // Import RouterModule directly
    BookRoutingModule
  ],
  exports: [RouterModule]
})
export class BookModule { }