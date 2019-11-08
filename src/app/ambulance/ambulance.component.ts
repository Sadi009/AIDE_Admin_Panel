import { Component, OnInit } from '@angular/core';
import { AmbulanceService } from '../services/ambulanceService/ambulance.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  ambulances;
  searchText;
  constructor(private ambulanceService: AmbulanceService) { }

  ngOnInit() {
    this.ambulances = this.ambulanceService.ambulances;
  }

}
