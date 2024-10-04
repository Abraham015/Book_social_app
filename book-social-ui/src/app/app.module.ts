import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClient,
    ],
    providers: [
        provideHttpClient(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
