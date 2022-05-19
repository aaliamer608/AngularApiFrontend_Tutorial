import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/services/users/mock-user';


const baseUrl: string = 'https://localhost:44325/api/Users/';

@Injectable({
  providedIn: 'root'
})


export class UserService {


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser>(baseUrl + '/GetUsers');
  }

  getUsersByID(id: number) {
    return this.http.get<IUser>(baseUrl + '/GetUsersByID' + '/' + id);
  }

  createUser(userObj: any) {
    return this.http.post(baseUrl + 'postUser', userObj);
  }




}
