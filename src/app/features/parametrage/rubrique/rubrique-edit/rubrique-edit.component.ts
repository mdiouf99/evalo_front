import { Component } from '@angular/core';
import {RubriqueModel} from "../../../../core/core/model/RubriqueModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RubriqueServiceService} from "../../../../share/share/service/rubrique-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-rubrique-edit',
  templateUrl: './rubrique-edit.component.html',
  styleUrls: ['./rubrique-edit.component.css']
})
export class RubriqueEditComponent {
  rubrique !: RubriqueModel;
  form!: FormGroup;
  id :number;
  isAddMode !: boolean ;

  constructor(private formBuilder: FormBuilder,private rubriqueService: RubriqueServiceService, private router : Router,private route: ActivatedRoute) {
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
      this.rubriqueService.getOneRubriqueById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }
  submitForm() {
    if (this.form.valid) {
      this.rubrique = this.form.value;
      if(this.isAddMode){
        this.createRubrique();
      }
      else {
        this.updateRubrique();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }
  createRubrique() {
    this.rubriqueService.createRubrique(this.rubrique).subscribe(
      rub=>{
        console.log(rub);
        this.router.navigate(['parametrage/rubriquelist'])
      }
    );
  }

  updateRubrique(){
    this.rubriqueService.updateRubrique(this.rubrique,this.id).subscribe(rub=>{
      console.log(rub);
      this.router.navigate(['rubriquelist'])
    })

  }



}
