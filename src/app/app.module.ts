import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "../utils/app-init";
import { EvalComponent } from './eval/eval.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RubriqueComponent } from './Entity/rubrique/rubrique.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralNavComponent } from './general-nav/general-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    EvalComponent,
    AcceuilComponent,
    RubriqueComponent,
    SidebarComponent,
    NavbarComponent,
    GeneralNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
