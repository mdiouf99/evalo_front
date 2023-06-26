import { Component } from '@angular/core';
import {faPlus, faSearch,faPencil,faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {UserService} from "../../../share/share/service/user.service";
import {User} from "../../../core/core/model/User";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
  faSearch=faSearch;
  faPlus=faPlus;
  faPencil = faPencil ;
  faTrashCan = faTrashCan ;
  query: string = '';

  user:User[]=[];
  constructor(private userService : UserService) {

  }
  searchUserByName(){
    this.userService.searchUser(this.query).subscribe((resp:any)=>{
      console.log(resp)
        this.user = resp ;
      }
    )

  }
}
