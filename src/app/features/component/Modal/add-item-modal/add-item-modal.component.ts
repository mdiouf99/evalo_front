import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../../../core/core/model/Item";
import {Categorie} from "../../../../core/core/model/Categorie";

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent implements  OnInit{
  @Input() items !: Item[];
  @Input() i!:number;
  @Input() addItemToCat !: Function ;
  isChecked!: boolean;
  @Input() selectedItem!: Item [];

  @Output() dataEmitted: EventEmitter<Item[]> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {
  }
  selectitem(event:any,item:Item){
    this.isChecked = event.target.checked;

    if(event.target.checked){
      if(this.selectedItem.length == 0){
        this.selectedItem = [item];
      }
      else{
        console.log('checkbox is checked=======>',this.selectedItem);
        this.selectedItem.push(item) ;
        console.log('checkbox is checked=======>',this.selectedItem);
      }
    }
    else{
      let i = this.selectedItem.indexOf(item);
      this.selectedItem.splice(i,1),
        console.log('checkbox is unchecked===>',this.selectedItem);
    }
  }
  emitData() {
    this.dataEmitted.emit(this.selectedItem);


  }

  ngOnInit(): void {

  }
  checkedvalue(item: Item):boolean{
    for(let i=0;i<this.selectedItem.length;i++){
      if(this.selectedItem[i].id==item.id){
        return true ;
      }
    }
    return false;
  }


}
