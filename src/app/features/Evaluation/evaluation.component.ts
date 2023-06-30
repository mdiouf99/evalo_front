import {Component, OnInit} from '@angular/core';
import {PlateauService} from "../../share/share/service/plateau.service";
import {Plateau} from "../../core/core/model/Plateau";
import {VersionService} from "../../share/share/service/version.service";
import {Version} from "../../core/core/model/Version";
import {User} from "../../core/core/model/User";
import {KeycloakService} from "keycloak-angular";
import Keycloak, {KeycloakInstance} from "keycloak-js";
import {UserService} from "../../share/share/service/user.service";
import {GrilleService} from "../../share/share/service/grille.service";
import {Grille} from "../../core/core/model/Grille";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit{

  plateau !: Plateau[];
  versions !: Version[];
  version !: Version;

  selectedPlateau !: Plateau ;

  selectedUser!:User ;

  username ?: string ;
  keycloak!: Keycloak;
  query: string = '';

  user!:User[];

  grille !: Grille ;
  activeTab!: String ;
  constructor(private plateauService: PlateauService,private grilleService : GrilleService , private userService : UserService, private versionService: VersionService,private kc : KeycloakService) {
  }
  ngOnInit(): void {

    this.getPlateau();
    this.getVersion();
    const componentContext = this;
     this.kc.loadUserProfile().then((profile) => {
      console.log(profile.username)
    this.username=profile.username;
      console.log(this.username);
      //gives you array of all attributes of user, extract what you need
    });





  }
  getPlateau() {
    console.log("rubrique")
    this.plateauService.getPlateau().subscribe((plateau: any) => {
        this.plateau = plateau;
      }
    )
  }

  getVersion() {
    this.versionService.getVersion().subscribe(ver => {
      this.versions = ver;
      this.version = this.versions[this.versions.length - 1]
    })
  }
  setActiveTab(id: string): void {
    this.activeTab = id;
  }

  addPlateauToGrille(event:any){
    console.time(event) ;
  }

  getUserByUsername(){

  }
  getCurrentUsername(){

  }
  searchUserByName(){
    this.userService.searchUser(this.query).subscribe((resp:any)=>{
        console.log(resp)
        this.user = resp ;
      }
    )

  }

  selectUser(user:User) {
    this.selectedUser = user ;
  }
  getGrilleByVersionAndPlateau(){
    this.grilleService.getGrilleByVersionAndPlateau(15,3).subscribe(grille=>{
      this.grille=grille[0] ;
      console.log('grille',this.grille)
    })
}

}
