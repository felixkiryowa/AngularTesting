///<reference path="../../node_modules/@angular/router/src/interfaces.d.ts"/>
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {DataService} from './data.service';
import {ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class MyResolver implements Resolve<any> {

    /*constructor*/
    constructor(private dataservice: DataService) {}
    resolve(route: ActivatedRouteSnapshot) {
        return this.dataservice.getUser(route.paramMap.get('id'));
    }

}
