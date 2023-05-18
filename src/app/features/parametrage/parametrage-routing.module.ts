import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthguardGuard} from "../../core/core/Guard/authguard.guard";
import {ParametrageComponent} from "../component/parametrage/parametrage.component";
import {RubriqueEditComponent} from "./rubrique/rubrique-edit/rubrique-edit.component";
import {RubriqueListComponent} from "./rubrique/rubrique-list/rubrique-list.component";


const routes: Routes = [
  {path:'parametrage',
    component:ParametrageComponent,
    canActivate:[AuthguardGuard],
    children:[
      { path: 'rubriqueedit', component: RubriqueEditComponent,canActivate:[AuthguardGuard]},
      { path: 'rubriqueedit/:id', component: RubriqueEditComponent,canActivate:[AuthguardGuard]},
      {path:'rubriquelist',component : RubriqueListComponent,canActivate:[AuthguardGuard]},
    ]
  }

  ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes
  )
  ],
  exports: [RouterModule]
})
export class ParametrageRoutingModule { }
