import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../sevices/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../sevices/services/authentication.service";
import {TokenService} from "../../sevices/token/token.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest:AuthenticationRequest={email: '', password: ''};
  errorMsg: Array<String> = [];

  constructor(private router: Router, private authService: AuthenticationService, private tokenService: TokenService) {
  }

  login() {
    this.errorMsg=[];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res)=>{
        this.tokenService.token=res.data as string;
        this.router.navigate(['books']);
      },
      error: (err)=>{
        console.log(err.error.validationErrors);
        if(err.error.validationErrors){
          Swal.fire({
            title: 'Error!',
            text: err.error.validationErrors,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'Email and / or Password is incorrect',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      }
    })
  }

  register(){
    this.router.navigate(['register'])
  }
}
