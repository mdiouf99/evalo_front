import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-general-nav',
  templateUrl: './general-nav.component.html',
  styleUrls: ['./general-nav.component.css']
})
export class GeneralNavComponent {
  constructor(private kcService:KeycloakService) {

  }

  logout(){
    this.kcService.logout();
  }
}
