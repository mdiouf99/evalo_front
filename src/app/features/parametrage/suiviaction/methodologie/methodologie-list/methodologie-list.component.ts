import { Component } from '@angular/core';
import {MethodologieService} from "../../../../../share/share/service/methodologie.service";
import {AlertService} from "../../../../../share/share/service/alert.service";
import {Methodologie} from "../../../../../core/core/model/Methodologie";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-methodologie-list',
  templateUrl: './methodologie-list.component.html',
  styleUrls: ['./methodologie-list.component.css']
})
export class MethodologieListComponent {
  faTrashCan = faTrashCan ;
  faPencil = faPencil ;
  constructor(private methodologieService : MethodologieService,private alertService: AlertService) {
  }
  ngOnInit() {
    this.getMethodologie();
  }
  methodologies ?: Methodologie[] ;

  getMethodologie(){
    console.log("rubrique")
    this.methodologieService.getMethodologie().subscribe((methodologie:any)=>{
        console.log("map");
        this.methodologies = methodologie ;
        console.log(Methodologie);
      }

    )

  }
  deleteMethodologie(Methodologie:Methodologie){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.methodologieService.deleteMethodologie(Methodologie.id).subscribe(()=>{
        this.getMethodologie();
      })
    }
  }

}
