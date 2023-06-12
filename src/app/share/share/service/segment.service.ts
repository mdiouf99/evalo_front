import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Segment} from "../../../core/core/model/Segment";
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getSegment(): Observable<Segment[]>{

    return this.http.get<Segment[]>(this.baseURL+'/segment/all',{headers:headers})
  }

  getOneSegmentById(id:number):Observable<Segment>{
    return this.http.get<Segment>(this.baseURL+'/segment/'+id,{headers:headers})
  }
  createSegment(segment:Segment):Observable<Segment>{
    return this.http.post<Segment>(this.baseURL+'/segment/create',segment,{headers:headers})
  }
  deleteSegment(id:number){
    return this.http.delete<Segment>(this.baseURL+'/segment/delete/'+id,{headers:headers})
  }
  updateSegment(segment:Segment,id:number):Observable<Segment>{
    return this.http.put<Segment>(this.baseURL+'/segment/update/'+id,segment,{headers:headers})
  }
}
