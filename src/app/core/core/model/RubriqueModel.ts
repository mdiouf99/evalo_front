import {Item} from "./Item";

export class RubriqueModel{
  id !:number ;
  libelle !:string;
  description !:string;
  status !: string ;
  items !: Item[];
}
