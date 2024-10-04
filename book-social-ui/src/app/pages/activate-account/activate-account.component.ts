import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../sevices/services/authentication.service";
import {NgIf} from "@angular/common";
import {CodeInputModule} from "angular-code-input";

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    NgIf,
    CodeInputModule
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message='';
  isOkay=true;
  submitted=false;
  constructor(private router: Router, private authService: AuthenticationService) {
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
    this.authService.activeAccount({
      token: token
    }).subscribe({
      next: ()=>{
        this.message="Your account has been successfully activated";
        this.submitted=true;
        this.isOkay=true;
      },
      error: (err) => {
        this.message="Token has been expired or invalid!";
        this.submitted=true;
        this.isOkay=false;
      }
    })
  }
}
