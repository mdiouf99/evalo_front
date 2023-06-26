import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlateauService} from "../../../../share/share/service/plateau.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../../share/share/service/alert.service";
import {Plateau} from "../../../../core/core/model/Plateau";
import {Segment} from "../../../../core/core/model/Segment";
import {Univers} from "../../../../core/core/model/Univers";
import {User} from "../../../../core/core/model/User";
import {UserService} from "../../../../share/share/service/user.service";
import {SegmentService} from "../../../../share/share/service/segment.service";
import {UniversService} from "../../../../share/share/service/univers.service";

@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.css']
})
export class UtilisateurEditComponent implements OnInit{
  user !: User;
  form!: FormGroup;
  id: number;
  isAddMode !: boolean;
  segments !:Segment[];
  selectedUnivers !: Univers ;
  selectedSegment !: Segment ;

  univers !: Univers [];
  groups:string[]=["Administrateur"]
  ngOnInit(): void {
  }
  constructor(private formBuilder: FormBuilder, private userService: UserService,private segmentService : SegmentService,private universService : UniversService , private router: Router, private route: ActivatedRoute,private alertService: AlertService) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      groups:[]=[[]],
    })
    if (!this.isAddMode) {
      this.userService.getUserById(this.id)
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        });
    }

  }
  submitForm() {
    if (this.form.valid) {
      this.user = this.form.value;
      console.log(this.user)
      if (this.isAddMode) {
        this.createUser();
      } else {
        this.updateUser();
      }

    } else {
      // Form validation failed
      // Handle the error or display validation messages
    }
  }

  createUser() {
    console.log('user======>',this.user)
    this.userService.createUser(this.user).subscribe(
      plateau => {
        console.log(plateau);
        this.alertService.showSuccess('Utilisateur créée avec succès')

      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.user, this.id).subscribe(plateau => {
      console.log(plateau);
      this.alertService.showSuccess('utilisateurs modifiée avec succès')
      setTimeout(() => {
        this.router.navigate(['parametrage/utilisateurs'])
      }, 3000);
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

}
