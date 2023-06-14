import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodologieRoutingModule } from './methodologie-routing.module';

import { MethodologieListComponent } from './methodologie-list/methodologie-list.component';
import { MethodologieEditComponent } from './methodologie-edit/methodologie-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MethodologieListComponent,
    MethodologieEditComponent
  ],
    imports: [
        CommonModule,
        MethodologieRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
})
export class MethodologieModule { }
