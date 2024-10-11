import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookRoutingModule // Importa el BookRoutingModule directamente
  ],
  exports: [BookRoutingModule] // Exporta el BookRoutingModule
})
export class BookModule { }