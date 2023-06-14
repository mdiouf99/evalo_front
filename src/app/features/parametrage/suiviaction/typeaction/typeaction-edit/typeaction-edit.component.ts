import { Component } from '@angular/core';
import {TypeAction} from "../../../../../core/core/model/TypeAction";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeactionService} from "../../../../../share/share/service/typeaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../../../share/share/service/alert.service";

@Component({
  selector: 'app-typeaction-edit',
  templateUrl: './typeaction-edit.component.html',
  styleUrls: ['./typeaction-edit.component.css']
})
export class TypeactionEditComponent {
  typeAction !: TypeAction;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;
  showAlert = false ;

  constructor(private formBuilder: FormBuilder, private typeActionService: TypeactionService, private router: Router, private route: ActivatedRoute,private alertService: AlertService) {
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
      this.typeActionService.getOneTypeActionById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }

  submitForm() {
    if (this.form.valid) {
      this.typeAction = this.form.value;
      if (this.isAddMode) {
        this.createTypeAction();
      } else {
        this.updateTypeAction();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createTypeAction() {
    console.log(this.typeAction)
    this.typeActionService.createTypeAction(this.typeAction).subscribe(
      typeAction => {
        console.log(typeAction);
        this.alertService.showSuccess('Type action créée avec succès')
        setTimeout(() => {
          this.router.navigate(['parametrage/typeaction/list'])
        }, 3000);
      }
    );
  }

  updateTypeAction() {
    this.typeActionService.updateTypeAction(this.typeAction, this.id).subscribe(TypeAction => {

      this.alertService.showSuccess('Type action créée avec succès')
      setTimeout(() => {
        this.router.navigate(['parametrage/typeaction/list'])
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
