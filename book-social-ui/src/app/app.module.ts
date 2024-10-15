import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {KeycloakService} from "./sevices/keycloak/keycloak.service";
import {KeycloakAngularModule} from "keycloak-angular";

export function kcFactory(kcService: KeycloakService) {
    return ()=>kcService.init();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        KeycloakAngularModule
    ],
    providers: [
        provideHttpClient(),
        {
            provide: APP_INITIALIZER,
            useFactory: kcFactory,
            multi: true,
            deps: [KeycloakService],
        },
        KeycloakService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
