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
import {Evaluation} from "../../core/core/model/Evaluation";
import {Appel} from "../../core/core/model/Appel";
import {EvalutionService} from "../../share/share/service/evalution.service";
import {CategorieService} from "../../share/share/service/categorie.service";

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

  evaluation : Evaluation={
    id: 0,
    anciennete: "",
    appel: undefined,
    conseiller: undefined,
    dispositif: "",
    evaluateur: "",
    grille: undefined,
    plateau: undefined,
    programme: "",
    typeecoute: ""
  };
  dispositif!: string;
  typeecoute!: string;
   programme !: string;
   anciennete !: string;

  appel: Appel={
    id: 0,
    date:new Date(),
    motif: "",
    produit: "",
    ref: ""

  };

  constructor(private plateauService: PlateauService,private categorieService:CategorieService,private evaluationService: EvalutionService,private grilleService : GrilleService , private userService : UserService, private versionService: VersionService,private kc : KeycloakService) {
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
  faireEvaluation(){
    /*this.evaluation.dispositif=this.dispositif;
    this.evaluation.anciennete=this.anciennete;
    this.evaluation.programme=this.programme;
    this.evaluation.typeecoute=this.typeecoute;
    this.evaluation.conseiller=this.selectedUser;*/

    // @ts-ignore
    for(let i =0;i<this.grille.categorie.length;i++){
      // @ts-ignore
      for(let j=0;j<this.grille.categorie[i].rubriques.length;j++){
        // @ts-ignore
        this.categorieService.getOneCategorieById(this.grille.categorie[i].id).subscribe(resp=>{
          console.log(resp);
          // @ts-ignore

          this.grille.categorie[i].rubriques[j].categorie=resp;
          }

        );

      }
    }
    console.log("Evaluation",this.grille);
    this.evaluation.plateau=this.selectedPlateau;
    this.evaluation.appel=this.appel;
    this.evaluation.grille=this.grille;
    this.evaluation.conseiller=this.selectedUser;


    console.log("Evaluation",this.evaluation);
    this.evaluationService.faireEvaluation(this.evaluation).subscribe(()=>{
      console.log("Evaluation faite avec succès")
    })

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
    this.grilleService.getGrilleByVersionAndPlateau(16,1).subscribe(grille=>{
      this.grille=grille ;
      console.log('grille',this.grille)
    })
}

}
