import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {RubriqueModel} from "../../../core/core/model/RubriqueModel";
import Keycloak from 'keycloak-js';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class RubriqueServiceService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getRubrique(): Observable<RubriqueModel[]>{

    return this.http.get<RubriqueModel[]>(this.baseURL+'/rubrique/all',{headers:headers})
  }

  getOneRubriqueById(id:number):Observable<RubriqueModel>{
    return this.http.get<RubriqueModel>(this.baseURL+'/rubrique/'+id,{headers:headers})
  }
  createRubrique(rubrique:RubriqueModel):Observable<RubriqueModel>{
    return this.http.post<RubriqueModel>(this.baseURL+'/rubrique/create',rubrique,{headers:headers})
  }
  deleteRubrique(id:number){
  return this.http.delete<RubriqueModel>(this.baseURL+'/rubrique/delete/'+id,{headers:headers})
  }
  updateRubrique(rubrique:RubriqueModel,id:number):Observable<RubriqueModel>{
    return this.http.put<RubriqueModel>(this.baseURL+'/rubrique/update/'+id,rubrique,{headers:headers})
  }



}
