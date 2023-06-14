import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuiviactionComponent} from "../../component/suiviaction/suiviaction.component";

const routes: Routes = [
  {
    path:'',
    component:SuiviactionComponent,
    children : [
      {path: 'methodologie', loadChildren: () => import(`./methodologie/methodologie.module`).then(m => m.MethodologieModule) },
      {path: 'typeaction', loadChildren: () => import(`./typeaction/typeaction.module`).then(m => m.TypeactionModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviactionRoutingModule { }
