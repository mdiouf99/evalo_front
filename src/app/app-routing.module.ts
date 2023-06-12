import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthguardGuard} from "./core/core/Guard/authguard.guard";
import {AcceuilComponent} from "./acceuil/acceuil.component";


const routes: Routes = [
  { path: 'parametrage', loadChildren: () => import(`./features/parametrage/parametrage.module`).then(m => m.ParametrageModule) },
  { path: 'accueil', component:AcceuilComponent,canActivate: [AuthguardGuard] },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  ];


@NgModule({
  imports: [RouterModule.forRoot( routes,{ enableTracing: false })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
