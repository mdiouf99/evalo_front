import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import {UtilisateurEditComponent} from "./utilisateur-edit/utilisateur-edit.component";
import {UtilisateursComponent} from "../../component/utilisateurs/utilisateurs.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
    UtilisateurEditComponent,
    UtilisateursComponent,
  ],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class UtilisateursModule { }
