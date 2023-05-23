import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrageComponent} from "../component/parametrage/parametrage.component";
import {RubriqueModule} from "./rubrique/rubrique-routing/rubrique.module";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {RubriqueEditComponent} from "./rubrique/rubrique-edit/rubrique-edit.component";
import {RubriqueListComponent} from "./rubrique/rubrique-list/rubrique-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ParametrageRoutingModule} from "./parametrage-routing.module";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";
import {ItemListComponent} from "./item/item-list/item-list.component";
import { GrilleComponent } from './grille/grille.component';
import { VersionEditComponent } from './version/version-edit/version-edit.component';
import { VersionListComponent } from './version/version-list/version-list.component';
import { CategorieEditComponent } from './categorie/categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './categorie/categorie-list/categorie-list.component';




@NgModule({
  declarations: [
    RubriqueListComponent,
    RubriqueEditComponent,
    ItemEditComponent,
    ItemListComponent,
    ParametrageComponent,
    GrilleComponent,
    VersionEditComponent,
    VersionListComponent,
    CategorieEditComponent,
    CategorieListComponent,


  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    RouterModule,
    ParametrageRoutingModule

  ]
})
export class ParametrageModule { }
