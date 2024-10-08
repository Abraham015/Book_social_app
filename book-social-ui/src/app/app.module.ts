import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import {HttpClient, provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpTokenInterceptor} from "./sevices/interceptor/http-token.interceptor";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        provideHttpClient(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
