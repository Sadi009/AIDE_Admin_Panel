import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/doctorService/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  patients = [];
  user_name;
  age;
  address;
  appointment_date;
  appointment_time;
  status = 'Requested';
  mobile;
  search;
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    // this.patients = this.appointmentService.patients;
    this.getPatients();
  }
  getPatients() {
    this.appointmentService.getPatients().subscribe(res => {
      res.forEach(result => {
        this.patients.push(result.data());
      });
    });
    }
    onAproved(data) {
      const msg = confirm('Are You Sure?');
      if (msg === true) {
        this.status = 'Approved';
        data.status = this.status;
        this.appointmentService.editPatient(data);
      }
      // console.log(data.status);

    }
    onDenyed(data) {
      const msg = confirm('Are You Sure?');
      if (msg === true) {
        this.status = 'Denyed';
        data.status = this.status;
        this.appointmentService.editPatient(data);
      }
    }
  //   onSubmit() {
  //     let id: any = this.patients.length + 1;
  //     id = id.toString();
  //     const data = {
  //       user_name: this.user_name,
  //       age: this.age,
  //       address: this.address,
  //       mobile: this.mobile,
  //       date: this.date,
  //       time: this.time,
  //       type: '3',
  //       is_login: true,
  //       status: true
  //     };
  //     console.log(data);
  //     this.appointmentService.addPatient(data).then(res => {});
  //     if (data === null) {
  //       return;
  //     }
  //     this.patients.push(data);
  //     this.user_name = '';
  //     this.address = '';
  //     this.mobile = '';
  //     this.age = '';
  //     this.date = '';
  //     this.time = '';
  // }
  // onDeletePatient(data) {
  //   this.appointmentService.deletePatient(data.id);
  //   const index = this.patients.indexOf(data);
  //   this.patients.splice(index, 1);
  //   console.log(data.id);
  // }

}
