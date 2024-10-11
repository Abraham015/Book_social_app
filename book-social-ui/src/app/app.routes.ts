import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { authGuard } from './sevices/guard/auth.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'activate-account',
        component: ActivateAccountComponent,
    },
    {
        path: 'books',
        loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule),
        canActivate: [authGuard],
    },
    // Add a fallback route if none of the routes match
    {
        path: '**',
        redirectTo: 'login',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Removed `|| []`
    exports: [RouterModule],
})
export class AppRoutingModule {}
