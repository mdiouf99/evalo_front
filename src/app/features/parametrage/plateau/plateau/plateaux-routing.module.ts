import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlateauListComponent} from "./plateau-list/plateau-list.component";
import {AuthguardGuard} from "../../../../core/core/Guard/authguard.guard";
import {PlateauEditComponent} from "./plateau-edit/plateau-edit.component";

const routes: Routes = [{path:'list',component:PlateauListComponent,canActivate: [AuthguardGuard]},
  {path:'edit',component:PlateauEditComponent,canActivate: [AuthguardGuard]},
  {path:'edit/:id',component:PlateauEditComponent,canActivate: [AuthguardGuard]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlateauxRoutingModule { }
