import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BookModule } from './book/book.module';
import {provideHttpClient} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BookModule // Import BookModule
    ],
    providers: [
        provideHttpClient(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }