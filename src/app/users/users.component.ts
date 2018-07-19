import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  $users: Object;
  constructor(private data: DataService, private route: Router) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
        data => this.$users = data
  );
  }

    onSelect(user) {
      this.route.navigate(['/details', user.id]);
    }
}
