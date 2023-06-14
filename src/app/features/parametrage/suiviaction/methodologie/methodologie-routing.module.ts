import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthguardGuard} from "../../../../core/core/Guard/authguard.guard";
import {MethodologieEditComponent} from "./methodologie-edit/methodologie-edit.component";
import {MethodologieListComponent} from "./methodologie-list/methodologie-list.component";


const routes: Routes = [{path:'list',component:MethodologieListComponent,canActivate: [AuthguardGuard]},
  {path:'edit',component:MethodologieEditComponent,canActivate: [AuthguardGuard]},
  {path:'edit/:id',component:MethodologieEditComponent,canActivate: [AuthguardGuard]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MethodologieRoutingModule { }
