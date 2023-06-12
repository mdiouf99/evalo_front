import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthguardGuard} from "../../../../core/core/Guard/authguard.guard";
import {UniversEditComponent} from "./univers-edit/univers-edit.component";
import {UniversListComponent} from "./univers-list/univers-list.component";

const routes: Routes = [
  {path:'list',component:UniversListComponent,canActivate: [AuthguardGuard]},
  {path:'edit',component:UniversEditComponent,canActivate: [AuthguardGuard]},
  {path:'edit/:id',component:UniversEditComponent,canActivate: [AuthguardGuard]},

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversRoutingModule { }
