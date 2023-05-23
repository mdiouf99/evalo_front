import { Component } from '@angular/core';
import {VersionService} from "../../../../share/share/service/Version.service";
import {Version} from "../../../../core/core/model/Version";

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent {
  constructor(private versionService : VersionService) {
  }
  ngOnInit() {
    this.getVersion();
  }
  versions ?: Version[] ;

  getVersion(){
    console.log("rubrique")
    this.versionService.getVersion().subscribe((Version:any)=>{
        console.log("map");
        this.versions = Version ;
        console.log(Version);
      }

    )

  }
  deleteVersion(Version:Version){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.versionService.deleteVersion(Version.id).subscribe(()=>{
        this.getVersion();
      })
    }
  }


}
