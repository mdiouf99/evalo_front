import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlateauListComponent} from "../../plateau/plateau/plateau-list/plateau-list.component";
import {AuthguardGuard} from "../../../../core/core/Guard/authguard.guard";
import {PlateauEditComponent} from "../../plateau/plateau/plateau-edit/plateau-edit.component";
import {TypeactionListComponent} from "./typeaction-list/typeaction-list.component";
import {TypeactionEditComponent} from "./typeaction-edit/typeaction-edit.component";

const routes: Routes = [{path:'list',component:TypeactionListComponent,canActivate: [AuthguardGuard]},
  {path:'edit',component:TypeactionEditComponent,canActivate: [AuthguardGuard]},
  {path:'edit/:id',component:TypeactionEditComponent,canActivate: [AuthguardGuard]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeactionRoutingModule { }
