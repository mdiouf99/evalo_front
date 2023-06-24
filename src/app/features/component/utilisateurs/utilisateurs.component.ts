import { Component } from '@angular/core';
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
  faSearch=faSearch;
  faPlus=faPlus;

}
