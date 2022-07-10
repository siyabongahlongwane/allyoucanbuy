import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(endpoint){
    const url = `${this.serverUrl}/${endpoint}`
    return this.http.get<any>(url);
  }
  register(endpoint, body){
    const url = `${this.serverUrl}/${endpoint}`
    return this.http.post<any>(url, body);
  }
}
