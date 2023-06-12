import { Component } from '@angular/core';

import {Categorie} from "../../../../core/core/model/Categorie";
import {CategorieService} from "../../../../share/share/service/categorie.service";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent {
  faTrashCan = faTrashCan ;
  faPencil = faPencil ;
  constructor(private categorieService : CategorieService) {
  }
  ngOnInit() {
    this.getCategorie();
  }
  categories ?: Categorie[] ;

  getCategorie(){
    console.log("rubrique")
    this.categorieService.getCategorie().subscribe((Categorie:any)=>{
        console.log("map");
        this.categories = Categorie ;
        console.log(Categorie);
      }

    )

  }
  deleteCategorie(Categorie:Categorie){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.categorieService.deleteCategorie(Categorie.id).subscribe(()=>{
        this.getCategorie();
      })
    }
  }


}
