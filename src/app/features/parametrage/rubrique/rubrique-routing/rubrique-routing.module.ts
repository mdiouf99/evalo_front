import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RubriqueEditComponent} from "../rubrique-edit/rubrique-edit.component";
import {AuthguardGuard} from "../../../../core/core/Guard/authguard.guard";

import {RubriqueListComponent} from "../rubrique-list/rubrique-list.component";

const routes: Routes = [

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubriqueRoutingModule { }
