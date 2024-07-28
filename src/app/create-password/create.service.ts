import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPassword } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl : string = environment.apiUrl + '/password'

  constructor(private http : HttpClient) { }

  public getPasswords() : Observable<IPassword[]> {
    return this.http.get<IPassword[]>(this.apiUrl);
  }

  public createPassword(password : IPassword) : Observable<IPassword> {
    return this.http.post<IPassword>(this.apiUrl, password);
  }
}
