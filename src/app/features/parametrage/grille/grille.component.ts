import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../share/share/service/categorie.service";
import {Categorie} from "../../../core/core/model/Categorie";
import {RubriqueModel} from "../../../core/core/model/RubriqueModel";
import {Grille} from "../../../core/core/model/Grille";
import {Item} from "../../../core/core/model/Item";
import {RubriqueServiceService} from "../../../share/share/service/rubrique-service.service";
import {ItemService} from "../../../share/share/service/item.service";
import {GrilleService} from "../../../share/share/service/grille.service";
import {VersionService} from "../../../share/share/service/version.service";
import {Version} from "../../../core/core/model/Version";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddItemModalComponent} from "../../component/Modal/add-item-modal/add-item-modal.component";
import {AddItemToRubriqueComponent} from "../../component/Modal/add-item-to-rubrique/add-item-to-rubrique.component";
import {AlertService} from "../../../share/share/service/alert.service";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {Plateau} from "../../../core/core/model/Plateau";
import {PlateauService} from "../../../share/share/service/plateau.service";




@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})


export class GrilleComponent implements OnInit{
  faSquarePlus = faSquarePlus ;
  faXmark = faXmark ;

  rubrique !: RubriqueModel ;
  categorie !: Categorie ;
  categories !: Categorie[] ;

  plateau !:Plateau[] ;

  selectedCategorie : Categorie[]=[] ;
  selectedItem:Item[]=[];
  selectedPlateau !: Plateau ;
  selectedItem2:Item[]=[];
  selectedItemCat:Item[]=[];

  selectedItemCat2:Item[]=[];
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

  constructor(private modalService: NgbModal, private categorieService : CategorieService,private rubriqueService : RubriqueServiceService,private itemService : ItemService,private  grilleService: GrilleService,private versionService : VersionService,private plateauService : PlateauService,private alertService : AlertService) {
  }
  ngOnInit() {
    this.getCategorie();
    this.getItems();
    this.getVersion();
    this.getPlateau();


  }
  getCategorie(){
    console.log("rubrique")
    this.categorieService.getActiveCategorie().subscribe((Categorie:any)=>{
        console.log("map");
        this.categories = Categorie ;
        console.log(Categorie);
      }


    )
}
  assignCorporationToManage(selectedValue:any) {
    console.log(selectedValue)
  }
  getItems(){
    console.log("rubrique")
    this.itemService.getActifItem().subscribe((item:any)=>{
        console.log("map");
        this.items = item ;
        console.log("item========>",this.items);
      }
    )
  }
  getPlateau(){
    console.log("rubrique")
    this.plateauService.getPlateau().subscribe((plateau:any)=>{
        console.log("map");
        this.plateau = plateau ;
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

  selectCategorie(event:any,categorie:Categorie){

    if(event.target.checked){
      if(this.selectedCategorie.length == 0){
        this.selectedCategorie = [categorie];
      }
      else{
        console.log('checkbox is checked=======>',this.selectedCategorie);
        this.selectedCategorie.push(categorie) ;
        console.log('checkbox is checked=======>',this.selectedCategorie);
      }
    }
    else{
      let i = this.selectedCategorie.indexOf(categorie);
      this.selectedCategorie.splice(i,1),
      console.log('checkbox is unchecked===>',this.selectedCategorie);
    }

  }


addCatToGrille(){

    this.grille.categorie = this.selectedCategorie;
    console.log(this.grille);

}
addVersionToGrille(){
    this.grille.version = this.version ;
    console.log("grille=======>",this.grille)
}
  addPlateauToGrille(event:any){
    this.grille.plateau =event ;
    console.log("grille=======>",this.grille)
  }

  addItemToCat(i:number ){

    // @ts-ignore
    this.grille.categorie[i].items = this.selectedItem;
    console.log('item ajoute =====>',this.grille);
    console.log('item==>',this.selectedItem);
    console.log('categorie index==>',i);

  }

  addItemToRubrique(c:number,i:number){

    // @ts-ignore
    console.log('item ajoute =====>',this.grille.categorie[0].rubriques[0]);
    // @ts-ignore
    this.grille.categorie[c].rubriques[i].items = this.selectedItemCat;
    console.log('categorie index==>',i);
  }

  saveGrille(){
    if(this.grille.version?.libelle=='version'){

      this.alertService.showError('Veuillez ajouter une version')
    }
    else if (this.grille.categorie?.length == 0){

      this.alertService.showError('Veuiller selectionner une categorie')

    }
    this.grilleService.createGrille(this.grille).subscribe(ver=>{
      this.alertService.showSuccess('Grille créée avec succès')
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
    const modalRef = this.modalService.open(AddItemModalComponent,{size:'lg'});
    modalRef.componentInstance.items = this.items;
    modalRef.componentInstance.i = i;
    modalRef.componentInstance.selectedItem = this.selectedItem2 ;
    modalRef.componentInstance.addItemToCat = this.addItemToCat.bind(this);
    modalRef.componentInstance.dataEmitted.subscribe((data: Item[]) => {
      this.selectedItem = data ;
      this.selectedItem2 = data ;
      console.log('data=====>',data)
      console.log('selected item pass to grille ==============>',this.selectedItem)
      // Handle the received data as needed
    });
  }

  //Open modal to add item to rubrique
  openrubrique(c:number,i:number) {
    const modalRef = this.modalService.open( AddItemToRubriqueComponent,{ size: 'lg' });
    modalRef.componentInstance.items = this.items;
    modalRef.componentInstance.i = i;
    modalRef.componentInstance.r = c;
    modalRef.componentInstance.selectedItem = this.selectedItemCat2 ;
    console.log('id cat======>',c)
    console.log('id rub=====>',i)
    modalRef.componentInstance.addItemToRubrique = this.addItemToRubrique.bind(this);
    modalRef.componentInstance.dataEmitted.subscribe((data: Item[]) => {
      this.selectedItemCat = data ;
      this.selectedItemCat2 = data ;
      console.log('data=====>',data)
      console.log('selected item pass to grille ==============>',this.selectedItem)
      // Handle the received data as needed
    });

}

}
