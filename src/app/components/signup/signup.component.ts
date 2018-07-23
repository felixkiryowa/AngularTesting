import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../service/auth-service.service';
import {Router} from '@angular/router';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null

  }
  public error = [];
  constructor(
      private  authservice: AuthServiceService,
      private Token: TokenService,
      private route: Router
  ) { }

  ngOnInit() {
  }

    onSubmit() {
        // console.log(this.form);
       this.authservice.signUp(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleError(error) {
        this.error = error.error.errors;
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.route.navigateByUrl('/profile');
    }


}
