import { Component } from '@angular/core';
import {Version} from "../../../../core/core/model/Version";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VersionService} from "../../../../share/share/service/Version.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-version-edit',
  templateUrl: './version-edit.component.html',
  styleUrls: ['./version-edit.component.css']
})
export class VersionEditComponent {
  version !: Version;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;

  constructor(private formBuilder: FormBuilder, private versionService: VersionService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      libelle: ['', Validators.required],
      status: ['', Validators.required]
    })
    if (!this.isAddMode) {
      this.versionService.getOneVersionById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }

  submitForm() {
    if (this.form.valid) {
      this.version = this.form.value;
      if (this.isAddMode) {
        this.createVersion();
      } else {
        this.updateVersion();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createVersion() {
    this.versionService.createVersion(this.version).subscribe(
      version => {
        console.log(version);
        this.router.navigate(['parametrage/versionlist'])
      }
    );
  }

  updateVersion() {
    this.versionService.updateVersion(this.version, this.id).subscribe(Version => {
      console.log(Version);
      this.router.navigate(['versionlist'])
    })


  }
}
