import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ApiModule } from "./sevices/api.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ApiModule.forRoot({rootUrl:'http://18.170.213.218:8088/api/v1'})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }