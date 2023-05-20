import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthguardGuard} from "../../core/core/Guard/authguard.guard";
import {ParametrageComponent} from "../component/parametrage/parametrage.component";
import {RubriqueEditComponent} from "./rubrique/rubrique-edit/rubrique-edit.component";
import {RubriqueListComponent} from "./rubrique/rubrique-list/rubrique-list.component";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";
import {ItemListComponent} from "./item/item-list/item-list.component";
import {GrilleComponent} from "./grille/grille.component";


const routes: Routes = [
  {path:'parametrage',
    component:ParametrageComponent,
    children:[
      {path: 'grille', component: GrilleComponent,canActivate:[AuthguardGuard]},
      { path: 'rubriqueedit', component: RubriqueEditComponent,canActivate:[AuthguardGuard]},
      { path: 'rubriqueedit/:id', component: RubriqueEditComponent,canActivate:[AuthguardGuard]},
      {path:'rubriquelist',component : RubriqueListComponent,canActivate:[AuthguardGuard]},
      { path: 'itemedit', component: ItemEditComponent,canActivate:[AuthguardGuard]},
      { path: 'itemedit/:id', component: ItemEditComponent,canActivate:[AuthguardGuard]},
      {path:'itemlist',component : ItemListComponent,canActivate:[AuthguardGuard]},
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
