import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl='https://dummyjson.com/users'
  constructor(private http:HttpClient) { }

  AllUsers(){
    return this.http.get(this.baseUrl)
    }
}
