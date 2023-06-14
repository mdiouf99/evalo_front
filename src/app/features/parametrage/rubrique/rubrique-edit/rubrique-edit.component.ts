import {Component, OnInit} from '@angular/core';
import {RubriqueModel} from "../../../../core/core/model/RubriqueModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RubriqueServiceService} from "../../../../share/share/service/rubrique-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../../share/share/service/alert.service";
import {Item} from "../../../../core/core/model/Item";
import {ItemService} from "../../../../share/share/service/item.service";

@Component({
  selector: 'app-rubrique-edit',
  templateUrl: './rubrique-edit.component.html',
  styleUrls: ['./rubrique-edit.component.css']
})
export class RubriqueEditComponent implements OnInit {
  rubrique !: RubriqueModel;
  form!: FormGroup;
  id :number;
  isAddMode !: boolean ;
  aItem : boolean = false ;
  items !: Item[];
  selectedItem ?: Item[];

  constructor(private formBuilder: FormBuilder,private itemService :ItemService, private rubriqueService: RubriqueServiceService, private router : Router,private route: ActivatedRoute, private alertService:AlertService) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode);

      this.form = this.formBuilder.group({
        id: [{value:'',disabled: true}],
        libelle: ['', Validators.required],
        description: ['', Validators.required],
        status: ['', Validators.required],
        items:[] = [[]]
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
        this.alertService.showSuccess('Type action créée avec succès')
        setTimeout(() => {
          this.router.navigate(['parametrage/rubriquelist'])
        }, 3000);
      }
    );
  }

  updateRubrique(){
    console.log(this.rubrique)
    this.rubriqueService.updateRubrique(this.rubrique,this.id).subscribe(rub=>{
      this.alertService.showSuccess('Type action créée avec succès')
      setTimeout(() => {
        this.router.navigate(['parametrage/rubriquelist'])
      }, 3000);
    })

  }
  getItems(){
    console.log("rubrique")
    this.itemService.getActifItem().subscribe((item:any)=>{
        console.log("map");
        this.items = item ;
        console.log("item========>",this.items);
      }
    )
  }

  ngOnInit(): void {
    this.getItems();
  }



}
