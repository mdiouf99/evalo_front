import { Component } from '@angular/core';
import {Methodologie} from "../../../../../core/core/model/Methodologie";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MethodologieService} from "../../../../../share/share/service/methodologie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../../../share/share/service/alert.service";

@Component({
  selector: 'app-methodologie-edit',
  templateUrl: './methodologie-edit.component.html',
  styleUrls: ['./methodologie-edit.component.css']
})
export class MethodologieEditComponent {
  methodologie !: Methodologie;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;
  showAlert = false ;

  constructor(private formBuilder: FormBuilder, private methodologieService: MethodologieService, private router: Router, private route: ActivatedRoute,private alertService: AlertService) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    })
    if (!this.isAddMode) {
      this.methodologieService.getOneMethodologieById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }

  submitForm() {
    if (this.form.valid) {
      this.methodologie = this.form.value;
      if (this.isAddMode) {
        this.createMethodologie();
      } else {
        this.updateMethodologie();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createMethodologie() {
    console.log(this.methodologie)
    this.methodologieService.createMethodologie(this.methodologie).subscribe(
      methodologie => {
        console.log(methodologie);
        this.alertService.showSuccess('Methodologie créée avec succès')
        setTimeout(() => {
          this.router.navigate(['parametrage/suiviaction/methodologie/list'])
        }, 3000);
      }
    );
  }

  updateMethodologie() {
    this.methodologieService.updateMethodologie(this.methodologie, this.id).subscribe(methodologie => {
      console.log(methodologie);
      this.alertService.showSuccess('Methodologie créée avec succès')
      setTimeout(() => {
        this.router.navigate(['parametrage/suiviaction/methodologie/list'])
      }, 3000);
    })


  }
  showSuccessAlert() {
    this.alertService.showSuccess('Success! Operation completed.');
  }

  showErrorAlert() {
    this.alertService.showError('Error! Operation failed.');
  }
}
