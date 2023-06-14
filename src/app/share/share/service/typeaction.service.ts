import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeAction} from "../../../core/core/model/TypeAction";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class TypeactionService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getTypeAction(): Observable<TypeAction[]>{

    return this.http.get<TypeAction[]>(this.baseURL+'/typeaction/all',{headers:headers})
  }

  getOneTypeActionById(id:number):Observable<TypeAction>{
    return this.http.get<TypeAction>(this.baseURL+'/typeaction/'+id,{headers:headers})
  }
  createTypeAction(typeAction:TypeAction):Observable<TypeAction>{
    return this.http.post<TypeAction>(this.baseURL+'/typeaction/create',typeAction,{headers:headers})
  }
  deleteTypeAction(id:number){
    return this.http.delete<TypeAction>(this.baseURL+'/typeaction/delete/'+id,{headers:headers})
  }
  updateTypeAction(typeAction:TypeAction,id:number):Observable<TypeAction>{
    return this.http.put<TypeAction>(this.baseURL+'/typeaction/update/'+id,typeAction,{headers:headers})
  }

}
