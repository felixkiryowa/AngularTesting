import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    $user: Object;
    public  userId;

 /* constructor(private route: ActivatedRoute, private dataservice: DataService) {
      /*this.route.params.subscribe( params => this.$user = params.id );
  }*/
 constructor(private route: ActivatedRoute, private dataservice: DataService, private router: Router) {}

  ngOnInit() {
     /*
     We read The Route Parameter
     */
     /*const id =  parseInt(this.route.snapshot.paramMap.get('id'));
     this.userId = id;
     */
     this.route.paramMap.subscribe((params: ParamMap) => {
         const id = parseInt(params.get('id'));
         this.userId = id;
         });

      /*alert(this.$user);*/

       this.dataservice.getUser(this.userId).subscribe(
       data => this.$user = data
       );

  }

    goPrevious() {
        const previousId = this.userId - 1;
        const mystring = previousId.toString();
        this.dataservice.getUser(mystring).subscribe(
            data => this.$user = data
        );
        this.router.navigate(['/details', previousId]);
    }

    goNext() {
        const nextId = this.userId + 1;
        const mystring = nextId.toString();
        this.dataservice.getUser(mystring).subscribe(
            data => this.$user = data
        );
        this.router.navigate(['/details', nextId]);
    }
}
