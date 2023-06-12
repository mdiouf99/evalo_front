import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {UniversService} from "../../../../../share/share/service/univers.service";
import {AlertService} from "../../../../../share/share/service/alert.service";
import {Univers} from "../../../../../core/core/model/Univers";

@Component({
  selector: 'app-univers-edit',
  templateUrl: './univers-edit.component.html',
  styleUrls: ['./univers-edit.component.css']
})
export class UniversEditComponent {
  univers !: Univers;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;
  showAlert = false ;

  constructor(private formBuilder: FormBuilder, private universService: UniversService, private router: Router, private route: ActivatedRoute,private alertService: AlertService) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      libelle: ['', Validators.required],
      status: ['', Validators.required]
    })
    if (!this.isAddMode) {
      this.universService.getOneUniversById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }

  submitForm() {
    if (this.form.valid) {
      this.univers = this.form.value;
      if (this.isAddMode) {
        this.createUnivers();
      } else {
        this.updateUnivers();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createUnivers() {
    this.universService.createUnivers(this.univers).subscribe(
      univers => {
        console.log(univers);
        this.showSuccessAlert()
        setTimeout(() => {
          this.router.navigate(['parametrage/universlist'])
        }, 3000);
      }
    );
  }

  updateUnivers() {
    this.universService.updateUnivers(this.univers, this.id).subscribe(univers => {
      console.log(univers);
      this.router.navigate(['universlist'])
    })


  }
  showSuccessAlert() {
    this.alertService.showSuccess('Success! Operation completed.');
  }

  showErrorAlert() {
    this.alertService.showError('Error! Operation failed.');
  }

}
