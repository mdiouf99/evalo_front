import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../../../core/core/model/Item";
import {Categorie} from "../../../../core/core/model/Categorie";

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {
  @Input() items !: Item[];
  @Input() i!:number;
  @Input() addItemToCat !: Function ;
  constructor(public activeModal: NgbActiveModal) {
  }
}
