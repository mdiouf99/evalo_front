import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {Categorie} from "../../../../core/core/model/Categorie";
import {CategorieService} from "../../../../share/share/service/categorie.service";
import {RubriqueServiceService} from "../../../../share/share/service/rubrique-service.service";
import {RubriqueModel} from "../../../../core/core/model/RubriqueModel";
import {Item} from "../../../../core/core/model/Item";

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit{
  categorie !: Categorie
  form!: FormGroup;
  id :number;
  isAddMode !: boolean ;
rubriques !: RubriqueModel[];
aRubrique : boolean = false ;

  selectedRubrique !: RubriqueModel[];
  constructor(private formBuilder: FormBuilder,private categorieService: CategorieService, private router : Router,private route: ActivatedRoute,private rubriqueService: RubriqueServiceService) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value:'',disabled: true}],
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      rubriques: [''],
      items:[]=[[]],
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
    console.log(this.categorie)
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
  getRubrique(){
    console.log("rubrique")
    this.rubriqueService.getRubrique().subscribe((rubrique:any)=>{
        console.log("map");
        this.rubriques = rubrique ;
        console.log(rubrique);
      }

    )

  }

  ngOnInit(): void {
    this.getRubrique();
  }

}
