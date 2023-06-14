import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviactionRoutingModule } from './suiviaction-routing.module';
import {SuiviactionComponent} from "../../component/suiviaction/suiviaction.component";


@NgModule({
  declarations: [
    SuiviactionComponent
  ],
  imports: [
    CommonModule,
    SuiviactionRoutingModule
  ]
})
export class SuiviactionModule { }
