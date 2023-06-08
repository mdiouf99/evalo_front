import { Component } from '@angular/core';
import {RubriqueServiceService} from "../../../../share/share/service/rubrique-service.service";
import {RubriqueModel} from "../../../../core/core/model/RubriqueModel";
import {Item} from "../../../../core/core/model/Item";
import {ItemService} from "../../../../share/share/service/item.service";
import {AlertService} from "../../../../share/share/service/alert.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  constructor(private itemService : ItemService,private alertService: AlertService) {
  }
  ngOnInit() {
    this.getItem();
  }
  items ?: Item[] ;

  getItem(){
    console.log("rubrique")
    this.itemService.getItem().subscribe((item:any)=>{
        console.log("map");
        this.items = item ;
        console.log(item);
      }

    )

  }
  deleteItem(item:Item){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.itemService.deleteItem(item.id).subscribe(()=>{
        this.getItem();
      })
    }
  }


}
