import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RubriqueRoutingModule} from "./rubrique-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RubriqueListComponent} from "../rubrique-list/rubrique-list.component";
import {RubriqueEditComponent} from "../rubrique-edit/rubrique-edit.component";



@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    RubriqueRoutingModule,


  ]
})
export class RubriqueModule { }
