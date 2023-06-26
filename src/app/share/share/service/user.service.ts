import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Plateau} from "../../../core/core/model/Plateau";
import {User} from "../../../core/core/model/User";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.baseURL+'/user/all',{headers:headers})
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.baseURL+'/user/'+id,{headers:headers})
  }
  createUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseURL+'/user/create',user,{headers:headers})
  }
  deleteUser(id:number){
    return this.http.delete<Plateau>(this.baseURL+'/user/delete/'+id,{headers:headers})
  }
  updateUser(user:User,id:number):Observable<Plateau>{
    return this.http.put<Plateau>(this.baseURL+'/user/update/'+id,user,{headers:headers})
  }
  searchUser(query:string):Observable<User[]>{
      return this.http.get<User[]>(this.baseURL+'/user/search', { params: { query } });
  }
}
