import {Version} from "./Version";
import {Categorie} from "./Categorie";
import {Plateau} from "./Plateau";
import {User} from "./User";
import {Grille} from "./Grille";
import {Appel} from "./Appel";

export class Evaluation{
  id!:number;
  evaluateur?:string;
  dispositif?:string;
  anciennete?:string;
  typeecoute?:string;
  programme?:string;

  grille?:Grille;
  conseiller?:User ;
  plateau?:Plateau;
  appel?:Appel;

}
