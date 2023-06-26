import {Component, OnInit} from '@angular/core';
import {PlateauService} from "../../share/share/service/plateau.service";
import {Plateau} from "../../core/core/model/Plateau";
import {VersionService} from "../../share/share/service/version.service";
import {Version} from "../../core/core/model/Version";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit{

  plateau !: Plateau[];
  versions !: Version[];
  version !: Version;

  constructor(private plateauService: PlateauService, private versionService: VersionService) {
  }
  ngOnInit(): void {
    this.getPlateau();
    this.getVersion();
  }

  getPlateau() {
    console.log("rubrique")
    this.plateauService.getPlateau().subscribe((plateau: any) => {

        this.plateau = plateau;

      }
    )
  }

  getVersion() {
    this.versionService.getVersion().subscribe(ver => {
      this.versions = ver;
      this.version = this.versions[this.versions.length - 1]
    })
  }


}
