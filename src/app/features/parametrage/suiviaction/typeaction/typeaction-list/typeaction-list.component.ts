import { Component } from '@angular/core';
import {TypeactionService} from "../../../../../share/share/service/typeaction.service";
import {AlertService} from "../../../../../share/share/service/alert.service";
import {TypeAction} from "../../../../../core/core/model/TypeAction";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-typeaction-list',
  templateUrl: './typeaction-list.component.html',
  styleUrls: ['./typeaction-list.component.css']
})
export class TypeactionListComponent {
  faTrashCan = faTrashCan ;
  faPencil = faPencil ;
  constructor(private typeActionService : TypeactionService,private alertService: AlertService) {
  }
  ngOnInit() {
    this.getTypeAction();
  }
  typeActions ?: TypeAction[] ;

  getTypeAction(){
    console.log("rubrique")
    this.typeActionService.getTypeAction().subscribe((typeAction:any)=>{
        console.log("map");
        this.typeActions = typeAction ;
        console.log(TypeAction);
      }

    )

  }
  deleteTypeAction(TypeAction:TypeAction){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.typeActionService.deleteTypeAction(TypeAction.id).subscribe(()=>{
        this.getTypeAction();
      })
    }
  }

}
