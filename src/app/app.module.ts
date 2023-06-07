import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "../utils/app-init";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EvalComponent } from './eval/eval.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralNavComponent } from './general-nav/general-nav.component';
import {TokenInterceptor} from "./core/core/interceptor/token.interceptor";
import {ParametrageModule} from "./features/parametrage/parametrage.module";
import { AccueilParametrageComponent } from './features/component/accueil-parametrage/accueil-parametrage.component';
import { AddItemModalComponent } from './features/component/Modal/add-item-modal/add-item-modal.component';
import { AddItemToRubriqueComponent } from './features/component/Modal/add-item-to-rubrique/add-item-to-rubrique.component';






@NgModule({
  declarations: [
    AppComponent,
    EvalComponent,
    AcceuilComponent,
    SidebarComponent,
    NavbarComponent,
    GeneralNavComponent,
    AccueilParametrageComponent,
    AddItemModalComponent,
    AddItemToRubriqueComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    ParametrageModule


  ],
  providers: [
    {provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true,},
    {
      provide:HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
