import {Item} from "./Item";
import {Categorie} from "./Categorie";

export class RubriqueModel{
  id !:number ;
  libelle !:string;
  description !:string;
  status !: string ;
  items !: Item[];
  categorie!:Categorie;
}
