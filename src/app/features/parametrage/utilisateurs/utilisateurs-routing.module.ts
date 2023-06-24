import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilisateursComponent} from "../../component/utilisateurs/utilisateurs.component";
import {UtilisateurEditComponent} from "./utilisateur-edit/utilisateur-edit.component";
import {AuthguardGuard} from "../../../core/core/Guard/authguard.guard";

const routes: Routes = [
  {
    path:'',
    component:UtilisateursComponent
  },
  {
    path:'edit',
    component:UtilisateurEditComponent
  },
  {
    path:'edit/:id',
    component:UtilisateurEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
