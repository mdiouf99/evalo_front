import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../../core/core/model/Item";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-item-to-rubrique',
  templateUrl: './add-item-to-rubrique.component.html',
  styleUrls: ['./add-item-to-rubrique.component.css']
})
export class AddItemToRubriqueComponent {
  @Input() items !: Item[];
  @Input() i!:number;
  @Input() r!:number;
  isChecked!: boolean;
  @Input() selectedItem!: Item [];
  @Input() addItemToRubrique !: Function ;
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
  checkedvalue(item: Item):boolean{
    for(let i=0;i<this.selectedItem.length;i++){
      if(this.selectedItem[i].id==item.id){
        return true ;
      }
    }
    return false;
  }
}
