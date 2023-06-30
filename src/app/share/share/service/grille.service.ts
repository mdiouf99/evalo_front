import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../../../core/core/model/Categorie";
import {Grille} from "../../../core/core/model/Grille";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class GrilleService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getGrille(): Observable<Grille[]>{

    return this.http.get<Grille[]>(this.baseURL+'/grille/all',{headers:headers})
  }
  createGrille(grille:Grille):Observable<Grille>{
    return this.http.post<Grille>(this.baseURL+'/grille/create',grille,{headers:headers})
  }
  getGrilleByVersionAndPlateau(idv:number,idp:number):Observable<Grille[]>{
  return this.http.get<Grille[]>(this.baseURL+'/grille/plateau/'+idp+'/version/'+idv,{headers:headers});
}
}
