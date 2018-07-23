import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthServiceService} from '../../service/auth-service.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';
import {MagicService} from '../../service/magic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  form =  {
      email: null,
      password: null
  };
  // variable to handle errors
  public error = null;
  constructor(
      private authservice: AuthServiceService,
      private Token: TokenService,
      private route: Router,
      private  magicService: MagicService
  ) { }

  ngOnInit() {

  }
  /*onSubmit() function*/
    onSubmit() {
        // console.log(this.form);
        this.authservice.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );

    }

    handleError(error) {
      this.error = error.error.error;
    }

    handleResponse(data) {
      this.Token.handle(data.access_token);
      this.magicService.changeAuthStatus(true);
      this.route.navigateByUrl('/profile');
    }

}
