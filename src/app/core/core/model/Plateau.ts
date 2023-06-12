import {Univers} from "./Univers";
import {Segment} from "./Segment";

export class Plateau{
  id !: number;
  appelation !:string;
  office !:string;
  status !:string;
  univers !:Univers;
  segments !: Segment[];

}
