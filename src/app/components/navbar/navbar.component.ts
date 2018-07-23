import { Component, OnInit } from '@angular/core';
import {MagicService} from '../../service/magic.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;
  constructor(
    private magicService : MagicService,
    private route: Router,
    private Token: TokenService) {}

  ngOnInit() {
      this.magicService.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.magicService.changeAuthStatus(false);
    this.route.navigateByUrl('/login');
  }

}
