import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";
import {Observable} from "rxjs";
import {Categorie} from "../../../core/core/model/Categorie";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getCategorie(): Observable<Categorie[]>{

    return this.http.get<Categorie[]>(this.baseURL+'/categorie/all',{headers:headers})
  }

  getOneCategorieById(id:number):Observable<Categorie>{
    return this.http.get<Categorie>(this.baseURL+'/categorie/'+id,{headers:headers})
  }
  createCategorie(categorie:Categorie):Observable<Categorie>{
    return this.http.post<Categorie>(this.baseURL+'/categorie/create',categorie,{headers:headers})
  }
  deleteCategorie(id:number){
    return this.http.delete<Categorie>(this.baseURL+'/categorie/delete/'+id,{headers:headers})
  }
  updateCategorie(categorie:Categorie,id:number):Observable<Categorie>{
    return this.http.put<Categorie>(this.baseURL+'/categorie/update/'+id,categorie,{headers:headers})
  }
  getActiveCategorie(): Observable<Categorie[]>{

    return this.http.get<Categorie[]>(this.baseURL+'/categorie/actif/all',{headers:headers})
  }


}
