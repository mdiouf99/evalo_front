import { Component } from '@angular/core';
import { PlateauService } from 'src/app/share/share/service/plateau.service';
import {Plateau} from "../../../../../core/core/model/Plateau";
import {AlertService} from "../../../../../share/share/service/alert.service";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plateau-list',
  templateUrl: './plateau-list.component.html',
  styleUrls: ['./plateau-list.component.css']
})
export class PlateauListComponent {
faTrashCan = faTrashCan ;
faPencil = faPencil ;
  constructor(private plateauService : PlateauService,private alertService: AlertService) {
  }
  ngOnInit() {
    this.getPlateaux();
  }
  plateaux ?: Plateau[] ;

  getPlateaux(){
    console.log("rubrique")
    this.plateauService.getPlateau().subscribe((plateau:any)=>{
        console.log("map");
        this.plateaux = plateau ;

      }

    )

  }
  deletePlateau(plateau:Plateau){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.plateauService.deletePlateau(plateau.id).subscribe(()=>{
        this.getPlateaux();
      })
    }
  }


}
