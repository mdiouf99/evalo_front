import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlateauRoutingModule } from './plateau-routing.module';
import {PlateauEditComponent} from "./plateau/plateau-edit/plateau-edit.component";
import {PlateauListComponent} from "./plateau/plateau-list/plateau-list.component";
import {SegmentEditComponent} from "./segment/segment-edit/segment-edit.component";
import {SegmentListComponent} from "./segment/segment-list/segment-list.component";
import {UniversEditComponent} from "./univers/univers-edit/univers-edit.component";
import {UniversListComponent} from "./univers/univers-list/univers-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgSelectModule} from "@ng-select/ng-select";
import {PlateauComponent} from "../../component/plateau/plateau.component";
import {UniversModule} from "./univers/univers.module";
import {PlateauxModule} from "./plateau/plateaux.module";
import {SegmentModule} from "./segment/segment.module";


@NgModule({
  declarations: [
    PlateauComponent
  ],
  imports: [
    CommonModule,
    PlateauRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,

  ]
})
export class PlateauModule { }
