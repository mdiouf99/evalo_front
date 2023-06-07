import {Component, Input} from '@angular/core';
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
  @Input() addItemToRubrique !: Function ;
  constructor(public activeModal: NgbActiveModal) {
  }
}
