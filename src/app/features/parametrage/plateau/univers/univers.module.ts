import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversRoutingModule } from './univers-routing.module';
import {PlateauListComponent} from "../plateau/plateau-list/plateau-list.component";
import {SegmentEditComponent} from "../segment/segment-edit/segment-edit.component";
import {SegmentListComponent} from "../segment/segment-list/segment-list.component";
import {UniversEditComponent} from "./univers-edit/univers-edit.component";
import {UniversListComponent} from "./univers-list/univers-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [

    UniversEditComponent,
    UniversListComponent
  ],
  imports: [
    CommonModule,
    UniversRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class UniversModule { }
