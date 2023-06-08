import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<{ message: string; alertType: string }>();


  constructor() { }
  alert$ = this.alertSubject.asObservable();

  showSuccess(message: string) {
    this.alertSubject.next({ message, alertType: 'success' });
  }

  showError(message: string) {
    this.alertSubject.next({ message, alertType: 'error' });
  }
}
