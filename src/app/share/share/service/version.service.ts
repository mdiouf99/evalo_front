import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Version} from "../../../core/core/model/Version";

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private keycloakService : KeycloakService, private http: HttpClient) { }

  private baseURL = `http://localhost:8000/api`

  getVersion(): Observable<Version[]>{

    return this.http.get<Version[]>(this.baseURL+'/version/all',{headers:headers})
  }

  getOneVersionById(id:number):Observable<Version>{
    return this.http.get<Version>(this.baseURL+'/version/'+id,{headers:headers})
  }
  createVersion(Version:Version):Observable<Version>{
    return this.http.post<Version>(this.baseURL+'/version/create',Version,{headers:headers})
  }
  deleteVersion(id:number){
    return this.http.delete<Version>(this.baseURL+'/version/delete/'+id,{headers:headers})
  }
  updateVersion(Version:Version,id:number):Observable<Version>{
    return this.http.put<Version>(this.baseURL+'/version/update/'+id,Version,{headers:headers})
  }


}
