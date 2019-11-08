import { Component, OnInit } from '@angular/core';
import { DoctorListService } from 'src/app/services/doctorService/doctor-list.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors;
  chambers;
  constructor(private doctorListService: DoctorListService) { }

  ngOnInit() {
    this.doctors = this.doctorListService.doctors;
  }
  getChamber(id) {
    const doctor = this.doctorListService.doctors;
    doctor.forEach(res => {
      if (res.id === id) {
        this.chambers = res.chambers;
      }
    });
  }

}
