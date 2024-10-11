import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {bookRoutes, BookRoutingModule} from './book-routing.module';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(bookRoutes)],
  ],
  exports: [RouterModule]
})
export class BookModule { }
