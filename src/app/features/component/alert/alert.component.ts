import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../share/share/service/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  message!: string;
  alertType!: string;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe(({ message, alertType }) => {
      this.message = message;
      this.alertType = alertType;
      if(this.alertType=='success')
      {
        setTimeout(() => {
        this.closeAlert()
      }, 3000);
      }

    });

  }

  closeAlert() {
    this.message = '';
    this.alertType = '';
  }
}
