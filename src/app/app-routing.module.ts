import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthguardGuard} from "./authguard.guard";
import {EvalComponent} from "./eval/eval.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";

const routes: Routes = [{ path: '', component: AcceuilComponent },
  { path: 'eval', component: EvalComponent },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
