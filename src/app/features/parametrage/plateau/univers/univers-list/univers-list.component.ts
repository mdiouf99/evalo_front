import { Component } from '@angular/core';
import { AlertService } from 'src/app/share/share/service/alert.service';
import {Univers} from "../../../../../core/core/model/Univers";
import {UniversService} from "../../../../../share/share/service/univers.service";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-univers-list',
  templateUrl: './univers-list.component.html',
  styleUrls: ['./univers-list.component.css']
})
export class UniversListComponent {
  faTrashCan = faTrashCan ;
  faPencil = faPencil ;
  constructor(private universService : UniversService,private alertService: AlertService) {
  }
  ngOnInit() {
    this.getUnivers();
  }
  univers ?: Univers[] ;

  getUnivers(){
    console.log("rubrique")
    this.universService.getUnivers().subscribe((univers:any)=>{
        console.log("map");
        this.univers = univers ;

      }

    )

  }
  deleteUnivers(univers:Univers){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.universService.deleteUnivers(univers.id).subscribe(()=>{
        this.getUnivers();
      })
    }
  }


}
