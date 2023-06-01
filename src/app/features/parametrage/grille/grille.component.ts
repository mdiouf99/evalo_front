import {Component, OnInit, Version} from '@angular/core';
import {CategorieService} from "../../../share/share/service/categorie.service";
import {Categorie} from "../../../core/core/model/Categorie";
import {RubriqueModel} from "../../../core/core/model/RubriqueModel";
import {Grille} from "../../../core/core/model/Grille";
import {Item} from "../../../core/core/model/Item";
import {RubriqueServiceService} from "../../../share/share/service/rubrique-service.service";

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit{
  rubrique !: RubriqueModel ;
  categorie !: Categorie ;
  categories !: Categorie[] ;
  activeTab!: String ;
  grille :Grille={
    version: {
      id:0,
      libelle : 'version',
      status : 'ACTIF',
    } ,
    categorie: []

  }
  rubriques !: RubriqueModel[] ;

  constructor(private categorieService : CategorieService,private rubriqueService : RubriqueServiceService) {
  }
  ngOnInit() {
    this.getCategorie();
    console.log('ruburique',this.rubriques);
  }
  getCategorie(){
    console.log("rubrique")
    this.categorieService.getCategorie().subscribe((Categorie:any)=>{
        console.log("map");
        this.categories = Categorie ;
        console.log(Categorie);
      }


    )
}

getOneCategorie(categorie:Categorie){
    this.categorieService.getOneCategorieById(categorie.id).subscribe((categorie:any)=>{
    this.categorie = categorie;

  })
}
  getRubriqueByCat(id:number){
    this.rubriqueService.getRubriqueByCat(id).subscribe((rub)=>{
      this.rubriques = rub;
      console.log('fonction====>: ',this.rubriques);

    })
  }
addCatToGrille(categorie:Categorie){

    this.grille.categorie?.push(categorie);
    console.log(this.grille);

}
  setActiveTab(id: string): void {
    this.activeTab = id;
  }

}
