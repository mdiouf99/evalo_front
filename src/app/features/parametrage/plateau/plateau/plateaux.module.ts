import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlateauxRoutingModule } from './plateaux-routing.module';
import {PlateauListComponent} from "./plateau-list/plateau-list.component";
import {PlateauEditComponent} from "./plateau-edit/plateau-edit.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
    PlateauEditComponent,
    PlateauListComponent,
  ],
  imports: [
    CommonModule,
    PlateauxRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class PlateauxModule { }
