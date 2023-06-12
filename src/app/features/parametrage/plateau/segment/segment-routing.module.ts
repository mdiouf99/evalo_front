import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SegmentListComponent} from "./segment-list/segment-list.component";
import {AuthguardGuard} from "../../../../core/core/Guard/authguard.guard";
import {SegmentEditComponent} from "./segment-edit/segment-edit.component";

const routes: Routes = [
  {path:'list',component:SegmentListComponent,canActivate: [AuthguardGuard]},
  {path:'edit',component:SegmentEditComponent,canActivate: [AuthguardGuard]},
  {path:'edit/:id',component:SegmentEditComponent,canActivate: [AuthguardGuard]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentRoutingModule { }
