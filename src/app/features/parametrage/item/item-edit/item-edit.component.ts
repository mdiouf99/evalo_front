import { Component } from '@angular/core';
import {RubriqueModel} from "../../../../core/core/model/RubriqueModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RubriqueServiceService} from "../../../../share/share/service/rubrique-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../../../../core/core/model/Item";
import {ItemService} from "../../../../share/share/service/item.service";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {
  item !: Item;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;

  constructor(private formBuilder: FormBuilder, private itemService: ItemService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      libelle: ['', Validators.required],
      status: ['', Validators.required]
    })
    if (!this.isAddMode) {
      this.itemService.getOneItemById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }

  submitForm() {
    if (this.form.valid) {
      this.item = this.form.value;
      if (this.isAddMode) {
        this.createItem();
      } else {
        this.updateItem();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createItem() {
    this.itemService.createItem(this.item).subscribe(
      item => {
        console.log(item);
        this.router.navigate(['parametrage/rubriquelist'])
      }
    );
  }

  updateItem() {
    this.itemService.updateItem(this.item, this.id).subscribe(item => {
      console.log(item);
      this.router.navigate(['rubriquelist'])
    })


  }
}
