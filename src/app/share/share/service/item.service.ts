import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RubriqueModel} from "../../../core/core/model/RubriqueModel";
import {Item} from "../../../core/core/model/Item";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getItem(): Observable<Item[]>{

    return this.http.get<Item[]>(this.baseURL+'/item/all',{headers:headers})
  }

  getOneItemById(id:number):Observable<Item>{
    return this.http.get<RubriqueModel>(this.baseURL+'/item/'+id,{headers:headers})
  }
  createItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.baseURL+'/item/create',item,{headers:headers})
  }
  deleteItem(id:number){
    return this.http.delete<Item>(this.baseURL+'/item/delete/'+id,{headers:headers})
  }
  updateItem(item:Item,id:number):Observable<Item>{
    return this.http.put<Item>(this.baseURL+'/item/update/'+id,item,{headers:headers})
  }



}
