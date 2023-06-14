import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Methodologie} from "../../../core/core/model/Methodologie";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class MethodologieService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getMethodologie(): Observable<Methodologie[]>{

    return this.http.get<Methodologie[]>(this.baseURL+'/methodologie/all',{headers:headers})
  }

  getOneMethodologieById(id:number):Observable<Methodologie>{
    return this.http.get<Methodologie>(this.baseURL+'/methodologie/'+id,{headers:headers})
  }
  createMethodologie(methodologie:Methodologie):Observable<Methodologie>{
    return this.http.post<Methodologie>(this.baseURL+'/methodologie/create',methodologie,{headers:headers})
  }
  deleteMethodologie(id:number){
    return this.http.delete<Methodologie>(this.baseURL+'/methodologie/delete/'+id,{headers:headers})
  }
  updateMethodologie(methodologie:Methodologie,id:number):Observable<Methodologie>{
    return this.http.put<Methodologie>(this.baseURL+'/methodologie/update/'+id,methodologie,{headers:headers})
  }

}
