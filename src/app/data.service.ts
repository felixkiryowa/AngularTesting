import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /*function to get users */
  getUsers() {

      return this.http.get('http://127.0.0.1:8000/get/menu/list');

  }

    getUser(userId) {
        return this.http.get('http://127.0.0.1:8000/get/menu/' + userId);
    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
