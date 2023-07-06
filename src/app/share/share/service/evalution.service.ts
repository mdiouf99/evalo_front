import { Injectable } from '@angular/core';
import {Categorie} from "../../../core/core/model/Categorie";
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Grille} from "../../../core/core/model/Grille";
import {Observable} from "rxjs";
import {Evaluation} from "../../../core/core/model/Evaluation";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class EvalutionService {

  private baseURL = `http://localhost:8000/api`
  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }
  faireEvaluation(evaluation:Evaluation):Observable<Grille>{
    return this.http.post<Evaluation>(this.baseURL+'/evaluation/create',evaluation,{headers:headers})
  }
}
