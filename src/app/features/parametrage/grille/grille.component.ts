import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../share/share/service/categorie.service";
import {Categorie} from "../../../core/core/model/Categorie";
import {RubriqueModel} from "../../../core/core/model/RubriqueModel";
import {Grille} from "../../../core/core/model/Grille";
import {Item} from "../../../core/core/model/Item";
import {RubriqueServiceService} from "../../../share/share/service/rubrique-service.service";
import {ItemService} from "../../../share/share/service/item.service";
import {GrilleService} from "../../../share/share/service/grille.service";
import {VersionService} from "../../../share/share/service/Version.service";
import {Version} from "../../../core/core/model/Version";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddItemModalComponent} from "../../component/Modal/add-item-modal/add-item-modal.component";
import {AddItemToRubriqueComponent} from "../../component/Modal/add-item-to-rubrique/add-item-to-rubrique.component";




@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})


export class GrilleComponent implements OnInit{

  rubrique !: RubriqueModel ;
  categorie !: Categorie ;
  categories !: Categorie[] ;
  items !: Item[];
  item !: Item ;
  activeTab!: String ;
  versions !:Version[];
  version !:Version;
  grille :Grille={
    version: {
      id:0,
      libelle : 'version',
      status : 'ACTIF',
    } ,
    categorie: []

  }
  rubriques !: RubriqueModel[] ;

  constructor(private modalService: NgbModal, private categorieService : CategorieService,private rubriqueService : RubriqueServiceService,private itemService : ItemService,private  grilleService: GrilleService,private versionService : VersionService) {
  }
  ngOnInit() {
    this.getCategorie();
    this.getItems();
    this.getVersion();

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
  getItems(){
    console.log("rubrique")
    this.itemService.getItem().subscribe((item:any)=>{
        console.log("map");
        this.items = item ;
        console.log("item========>",this.items);
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
addVersionToGrille(){
    this.grille.version = this.version ;
    console.log("grille=======>",this.grille)
}
  addItemToCat(item : Item,i:number ){
    // @ts-ignore
    this.grille.categorie[i].items.push(item);
    console.log('item ajoute =====>',this.grille);
    console.log('item==>',item);
    console.log('categorie index==>',i);

  }

  addItemToRubrique(item : Item,c:number,i:number){

    // @ts-ignore
    console.log('item ajoute =====>',this.grille.categorie[0].rubriques[0]);
    // @ts-ignore
    this.grille.categorie[c].rubriques[i].items.push(item);
    console.log('item==>',item);
    console.log('categorie index==>',i);
  }

  saveGrille(){

    this.grilleService.createGrille(this.grille).subscribe(ver=>{

    });
  }
  setActiveTab(id: string): void {
    this.activeTab = id;
  }

  createVersion(){

  }
  getVersion(){
    this.versionService.getVersion().subscribe(ver=>{
      this.versions = ver ;
      this.version = this.versions[this.versions.length-1]

    })

  }
  //Open modal to add item to categorique
  open(i:number) {
    const modalRef = this.modalService.open(AddItemModalComponent);
    modalRef.componentInstance.items = this.items;
    modalRef.componentInstance.i = i;
    modalRef.componentInstance.addItemToCat = this.addItemToCat.bind(this);
  }
  //Open modal to add item to rubrique
  openrubrique(c:number,i:number) {
    const modalRef = this.modalService.open(AddItemToRubriqueComponent);
    modalRef.componentInstance.items = this.items;
    modalRef.componentInstance.i = i;
    modalRef.componentInstance.r = c;
    console.log('id cat======>',c)
    console.log('id rub=====>',i)
    modalRef.componentInstance.addItemToRubrique = this.addItemToRubrique.bind(this);
  }


}
