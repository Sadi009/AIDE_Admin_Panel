import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/doctorService/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  patients;
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.patients = this.appointmentService.patients;
  }

}
