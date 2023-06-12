import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentRoutingModule } from './segment-routing.module';
import {PlateauListComponent} from "../plateau/plateau-list/plateau-list.component";
import {SegmentEditComponent} from "./segment-edit/segment-edit.component";
import {SegmentListComponent} from "./segment-list/segment-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeTestingModule} from "@fortawesome/angular-fontawesome/testing";


@NgModule({
  declarations: [
    SegmentEditComponent,
    SegmentListComponent,
  ],
  imports: [
    CommonModule,
    SegmentRoutingModule,
    ReactiveFormsModule,
    FontAwesomeTestingModule
  ]
})
export class SegmentModule { }
