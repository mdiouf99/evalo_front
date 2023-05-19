import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthguardGuard} from "./core/core/Guard/authguard.guard";
import {EvalComponent} from "./eval/eval.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";

import {RubriqueListComponent} from "./features/parametrage/rubrique/rubrique-list/rubrique-list.component";
import {ParametrageComponent} from "./features/component/parametrage/parametrage.component";
import {RubriqueEditComponent} from "./features/parametrage/rubrique/rubrique-edit/rubrique-edit.component";

const routes: Routes = [
  { path: '', component:AcceuilComponent,canActivate: [AuthguardGuard] },
  ];


@NgModule({
  imports: [RouterModule.forRoot( routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
