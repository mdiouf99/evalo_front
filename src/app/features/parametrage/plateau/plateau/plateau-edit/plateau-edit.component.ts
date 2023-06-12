import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PlateauService} from "../../../../../share/share/service/plateau.service";
import {AlertService} from "../../../../../share/share/service/alert.service";
import {Plateau} from "../../../../../core/core/model/Plateau";
import {SegmentService} from "../../../../../share/share/service/segment.service";
import {Segment} from "../../../../../core/core/model/Segment";
import {Univers} from "../../../../../core/core/model/Univers";
import {UniversService} from "../../../../../share/share/service/univers.service";

@Component({
  selector: 'app-plateau-edit',
  templateUrl: './plateau-edit.component.html',
  styleUrls: ['./plateau-edit.component.css']
})
export class PlateauEditComponent implements OnInit{
  plateau !: Plateau;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;
  segments !:Segment[];

  univers !: Univers [];

  selectedSegment !: Segment [];
  selectedUnivers !: number ;
  showAlert = false ;

  constructor(private formBuilder: FormBuilder, private plateauService: PlateauService, private router: Router, private route: ActivatedRoute,private alertService: AlertService,private segmentService : SegmentService,private universService : UniversService) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

    this.form = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      appelation: ['', Validators.required],
      office: ['', Validators.required],
      univers: ['', Validators.required],
      segments: [''],
      status: ['', Validators.required]
    })
    if (!this.isAddMode) {
      this.plateauService.getOnePlateauById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }


  }
  ngOnInit() {
    this.getSegment();
    this.getUnivers();
  }



  submitForm() {
    if (this.form.valid) {
      this.plateau = this.form.value;
      console.log(this.plateau)
      if (this.isAddMode) {
        this.createPlateau();
      } else {
        this.updatePlateau();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createPlateau() {
    this.plateauService.createPlateau(this.plateau).subscribe(
      plateau => {
        console.log(plateau);
        this.showSuccessAlert()
        setTimeout(() => {
          this.router.navigate(['parametrage/plateaulist'])
        }, 3000);
      }
    );
  }

  updatePlateau() {
    this.plateauService.updatePlateau(this.plateau, this.id).subscribe(plateau => {
      console.log(plateau);
      this.router.navigate(['rubriquelist'])
    })


  }
  getSegment(){

    this.segmentService.getSegment().subscribe((Segment:any)=>{
        console.log("map");
        this.segments = Segment ;
        console.log(Segment);
      }

    )

  }
  getUnivers(){
    console.log("rubrique")
    this.universService.getUnivers().subscribe((univers:any)=>{
        console.log("map");
        this.univers = univers ;

      }

    )

  }
  showSuccessAlert() {
    this.alertService.showSuccess('Success! Operation completed.');
  }

  showErrorAlert() {
    this.alertService.showError('Error! Operation failed.');
  }

}
