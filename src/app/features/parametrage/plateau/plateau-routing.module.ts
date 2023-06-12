import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PlateauComponent} from "../../component/plateau/plateau.component";



const routes: Routes = [{
  path:'',
  component:PlateauComponent,
  children:[
    {path: 'plateaux', loadChildren: () => import(`./plateau/plateaux.module`).then(m => m.PlateauxModule) },
    {path: 'segment', loadChildren: () => import(`./segment/segment.module`).then(m => m.SegmentModule) },
    {path: 'univers', loadChildren: () => import(`./univers/univers.module`).then(m => m.UniversModule) },
  ]
}]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes
  )
  ],
  exports: [RouterModule]
})
export class PlateauRoutingModule { }
