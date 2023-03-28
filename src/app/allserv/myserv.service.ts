import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor(private http:HttpClient) {}

  getData() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  
}
