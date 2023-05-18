import {Component, OnInit} from '@angular/core';
import {RubriqueModel} from "../../../../core/core/model/RubriqueModel";
import {RubriqueServiceService} from "../../../../share/share/service/rubrique-service.service";
import {map} from "rxjs";

@Component({
  selector: 'app-rubrique-list',
  templateUrl: './rubrique-list.component.html',
  styleUrls: ['./rubrique-list.component.css']
})
export class RubriqueListComponent implements OnInit{


  constructor(private rubriqueService : RubriqueServiceService) {
  }
  ngOnInit() {
    this.getRubrique();
  }
  rubriques ?: RubriqueModel[] ;

getRubrique(){
  console.log("rubrique")
  this.rubriqueService.getRubrique().subscribe((rubrique:any)=>{
      console.log("map");
      this.rubriques = rubrique ;
      console.log(rubrique);
      }

  )

}
deleteRubrique(rub:RubriqueModel){
  let conf = confirm("Etes-vous sur de vouloir supprimer ?")
  if(conf){
    this.rubriqueService.deleteRubrique(rub.id).subscribe(()=>{
      this.getRubrique();
    })
  }
}


}
