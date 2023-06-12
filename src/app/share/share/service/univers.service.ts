import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Univers} from "../../../core/core/model/Univers";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class UniversService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getUnivers(): Observable<Univers[]>{

    return this.http.get<Univers[]>(this.baseURL+'/univers/all',{headers:headers})
  }

  getOneUniversById(id:number):Observable<Univers>{
    return this.http.get<Univers>(this.baseURL+'/univers/'+id,{headers:headers})
  }
  createUnivers(univers:Univers):Observable<Univers>{
    return this.http.post<Univers>(this.baseURL+'/univers/create',univers,{headers:headers})
  }
  deleteUnivers(id:number){
    return this.http.delete<Univers>(this.baseURL+'/univers/delete/'+id,{headers:headers})
  }
  updateUnivers(univers:Univers,id:number):Observable<Univers>{
    return this.http.put<Univers>(this.baseURL+'/univers/update/'+id,univers,{headers:headers})
  }
}
