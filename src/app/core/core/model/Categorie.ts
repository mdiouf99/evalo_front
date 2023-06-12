import {RubriqueModel} from "./RubriqueModel";
import {Item} from "./Item";

export class Categorie{
  id !: number;
  libelle !:string;
  description !:string;
  status !:string;
  items !:Item[] ;
  rubriques !: RubriqueModel[];

}
