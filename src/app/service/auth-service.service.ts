import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public  baseUrl = 'http://127.0.0.1:8000/api/auth';
  constructor(private http: HttpClient) {}

    signUp(data) {
        return this.http.post(`${this.baseUrl}/signup`, data);
    }


    login(data) {
        return this.http.post(`${this.baseUrl}/login`, data);
    }
}
