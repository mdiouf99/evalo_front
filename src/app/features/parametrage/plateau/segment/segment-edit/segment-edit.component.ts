import { Component } from '@angular/core';
import {Segment} from "../../../../../core/core/model/Segment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SegmentService} from "../../../../../share/share/service/segment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../../../share/share/service/alert.service";

@Component({
  selector: 'app-segment-edit',
  templateUrl: './segment-edit.component.html',
  styleUrls: ['./segment-edit.component.css']
})
export class SegmentEditComponent {
  segment !: Segment;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;
  showAlert = false ;

  constructor(private formBuilder: FormBuilder, private segmentService: SegmentService, private router: Router, private route: ActivatedRoute,private alertService: AlertService) {
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
      this.segmentService.getOneSegmentById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }

  submitForm() {
    if (this.form.valid) {
      this.segment = this.form.value;
      if (this.isAddMode) {
        this.createSegment();
      } else {
        this.updateSegment();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createSegment() {
    this.segmentService.createSegment(this.segment).subscribe(
      segment => {
        console.log(Segment);
        this.showSuccessAlert()
        setTimeout(() => {
          this.router.navigate(['parametrage/Segmentlist'])
        }, 3000);
      }
    );
  }

  updateSegment() {
    this.segmentService.updateSegment(this.segment, this.id).subscribe(segment => {
      console.log(segment);
      this.router.navigate(['segmentlist'])
    })


  }
  showSuccessAlert() {
    this.alertService.showSuccess('Success! Operation completed.');
  }

  showErrorAlert() {
    this.alertService.showError('Error! Operation failed.');
  }

}
