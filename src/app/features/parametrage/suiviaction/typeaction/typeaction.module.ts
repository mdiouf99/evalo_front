import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeactionRoutingModule } from './typeaction-routing.module';
import { TypeactionListComponent } from './typeaction-list/typeaction-list.component';
import { TypeactionEditComponent } from './typeaction-edit/typeaction-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TypeactionListComponent,
    TypeactionEditComponent
  ],
  imports: [
    CommonModule,
    TypeactionRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class TypeactionModule { }
