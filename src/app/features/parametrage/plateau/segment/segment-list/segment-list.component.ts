import { Component } from '@angular/core';
import {SegmentService} from "../../../../../share/share/service/segment.service";
import {AlertService} from "../../../../../share/share/service/alert.service";
import {Segment} from "../../../../../core/core/model/Segment";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-segment-list',
  templateUrl: './segment-list.component.html',
  styleUrls: ['./segment-list.component.css']
})
export class SegmentListComponent {
  faTrashCan = faTrashCan ;
  faPencil = faPencil ;
  constructor(private segmentService : SegmentService,private alertService: AlertService) {
  }
  ngOnInit() {
    this.getSegment();
  }
  segments ?: Segment[] ;

  getSegment(){

    this.segmentService.getSegment().subscribe((Segment:any)=>{
        console.log("map");
        this.segments = Segment ;
        console.log(Segment);
      }

    )

  }
  deleteSegment(segment:Segment){
    let conf = confirm("Etes-vous sur de vouloir supprimer ?")
    if(conf){
      this.segmentService.deleteSegment(segment.id).subscribe(()=>{
        this.getSegment();
      })
    }
  }


}
