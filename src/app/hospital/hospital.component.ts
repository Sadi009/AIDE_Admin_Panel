import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospitalService/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitals;
  searchText;

  constructor(private hospitalService: HospitalService) { }

  ngOnInit() {
    this.hospitals = this.hospitalService.hospitals;
  }

}
