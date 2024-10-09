import { Component } from '@angular/core';
import {RegistrationRequest} from "../../sevices/models/registration-request";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../sevices/services/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerRequest: RegistrationRequest={email: '', firstName: '', lastName:'', password:''};
  errorMsg: Array<String>=[];

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  login() {
    this.router.navigate(['login'])
  }

  register(){
    this.errorMsg=[];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: ()=>{
        Swal.fire({
          icon: "success",
          title: "User created successfully",
          confirmButtonText: 'Ok'
        }).then(()=>this.router.navigate(['activate-account']));
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          html: `
              ${err.error.validationErrors.join('<br>')}
            `,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
        });
  }
}
