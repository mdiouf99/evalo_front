import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrageComponent} from "../component/parametrage/parametrage.component";
import {RubriqueModule} from "./rubrique/rubrique-routing/rubrique.module";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {RubriqueEditComponent} from "./rubrique/rubrique-edit/rubrique-edit.component";
import {RubriqueListComponent} from "./rubrique/rubrique-list/rubrique-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ParametrageRoutingModule} from "./parametrage-routing.module";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";
import {ItemListComponent} from "./item/item-list/item-list.component";
import { GrilleComponent } from './grille/grille.component';
import { VersionEditComponent } from './version/version-edit/version-edit.component';
import { VersionListComponent } from './version/version-list/version-list.component';
import { CategorieEditComponent } from './categorie/categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './categorie/categorie-list/categorie-list.component';
import {AlertComponent} from "../component/alert/alert.component";
import { PlateauComponent } from '../component/plateau/plateau.component';
import { PlateauEditComponent } from './plateau/plateau/plateau-edit/plateau-edit.component';
import { PlateauListComponent } from './plateau/plateau/plateau-list/plateau-list.component';
import { SegmentEditComponent } from './plateau/segment/segment-edit/segment-edit.component';
import { SegmentListComponent } from './plateau/segment/segment-list/segment-list.component';
import { UniversEditComponent } from './plateau/univers/univers-edit/univers-edit.component';
import { UniversListComponent } from './plateau/univers/univers-list/univers-list.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PlateauModule} from "./plateau/plateau.module";
import {NgSelectModule} from "@ng-select/ng-select";
import { UtilisateursComponent } from '../component/utilisateurs/utilisateurs.component';
import { UtilisateurEditComponent } from './utilisateurs/utilisateur-edit/utilisateur-edit.component';




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
    AlertComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        ReactiveFormsModule,
        RouterModule,
        ParametrageRoutingModule,
        FontAwesomeModule,
        NgSelectModule,
        FormsModule,

    ],
  exports: [
  ],
})
export class ParametrageModule { }
