import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthguardGuard} from "../../core/core/Guard/authguard.guard";
import {ParametrageComponent} from "../component/parametrage/parametrage.component";
import {RubriqueEditComponent} from "./rubrique/rubrique-edit/rubrique-edit.component";
import {RubriqueListComponent} from "./rubrique/rubrique-list/rubrique-list.component";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";
import {ItemListComponent} from "./item/item-list/item-list.component";
import {GrilleComponent} from "./grille/grille.component";
import {AcceuilComponent} from "../../acceuil/acceuil.component";
import {AccueilParametrageComponent} from "../component/accueil-parametrage/accueil-parametrage.component";
import {VersionEditComponent} from "./version/version-edit/version-edit.component";
import {VersionListComponent} from "./version/version-list/version-list.component";
import {CategorieListComponent} from "./categorie/categorie-list/categorie-list.component";
import {CategorieEditComponent} from "./categorie/categorie-edit/categorie-edit.component";
import {PlateauComponent} from "./plateau/plateau.component";


const routes: Routes = [
  {path:'parametrage',
    component:ParametrageComponent,
    children:[
      {path: 'plateau', component: PlateauComponent,canActivate:[AuthguardGuard]},
      {path: 'grille', component: GrilleComponent,canActivate:[AuthguardGuard]},
      {path: '', component: AccueilParametrageComponent,canActivate:[AuthguardGuard]},
      { path: 'rubriqueedit', component: RubriqueEditComponent,canActivate:[AuthguardGuard]},
      { path: 'rubriqueedit/:id', component: RubriqueEditComponent,canActivate:[AuthguardGuard]},
      {path:'rubriquelist',component : RubriqueListComponent,canActivate:[AuthguardGuard]},
      { path: 'itemedit', component: ItemEditComponent,canActivate:[AuthguardGuard]},
      { path: 'itemedit/:id', component: ItemEditComponent,canActivate:[AuthguardGuard]},
      {path:'itemlist',component : ItemListComponent,canActivate:[AuthguardGuard]},
      { path: 'versionedit', component: VersionEditComponent,canActivate:[AuthguardGuard]},
      { path: 'versionedit/:id', component: VersionEditComponent,canActivate:[AuthguardGuard]},
      {path:'versionlist',component : VersionListComponent,canActivate:[AuthguardGuard]},
      { path: 'categorieedit', component: CategorieEditComponent,canActivate:[AuthguardGuard]},
      { path: 'categorieedit/:id', component: CategorieEditComponent,canActivate:[AuthguardGuard]},
      {path:'categorielist',component : CategorieListComponent,canActivate:[AuthguardGuard]},
    ]
  }

  ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes
  )
  ],
  exports: [RouterModule]
})
export class ParametrageRoutingModule { }
