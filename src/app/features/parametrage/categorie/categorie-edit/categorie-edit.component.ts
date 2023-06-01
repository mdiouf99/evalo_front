import { Component } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../../../core/core/model/Categorie";
import {CategorieService} from "../../../../share/share/service/categorie.service";

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent {
  categorie !: Categorie;
  form!: FormGroup;
  id :number;
  isAddMode !: boolean ;

  constructor(private formBuilder: FormBuilder,private categorieService: CategorieService, private router : Router,private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value:'',disabled: true}],
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    })
    if (!this.isAddMode) {
      this.categorieService.getOneCategorieById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }
  submitForm() {
    if (this.form.valid) {
      this.categorie = this.form.value;
      if(this.isAddMode){
        this.createCategorie();
      }
      else {
        this.updateCategorie();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }
  createCategorie() {
    this.categorieService.createCategorie(this.categorie).subscribe(
      cat=>{
        console.log(cat);
        this.router.navigate(['parametrage/categorielist'])
      }
    );
  }

  updateCategorie(){
    this.categorieService.updateCategorie(this.categorie,this.id).subscribe(cat=>{
      console.log(cat);
      this.router.navigate(['parametrage/categorielist'])
    })

  }

}
