import { Injectable } from '@angular/core';
import {Plateau} from "../../../core/core/model/Plateau";
import {Observable} from "rxjs";
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from '@angular/common/http';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class PlateauService {


  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getPlateau(): Observable<Plateau[]>{

    return this.http.get<Plateau[]>(this.baseURL+'/plateau/all',{headers:headers})
  }

  getOnePlateauById(id:number):Observable<Plateau>{
    return this.http.get<Plateau>(this.baseURL+'/plateau/'+id,{headers:headers})
  }
  createPlateau(plateau:Plateau):Observable<Plateau>{
    return this.http.post<Plateau>(this.baseURL+'/plateau/create',plateau,{headers:headers})
  }
  deletePlateau(id:number){
    return this.http.delete<Plateau>(this.baseURL+'/plateau/delete/'+id,{headers:headers})
  }
  updatePlateau(plateau:Plateau,id:number):Observable<Plateau>{
    return this.http.put<Plateau>(this.baseURL+'/plateau/update/'+id,plateau,{headers:headers})
  }
}
