import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  hospitals = [
    {
      id: 1,
      name: 'A Hospital 1',
      address: 'Hospital 1 address',
      contact: '01*********'
    },
    {
      id: 2,
      name: 'B Hospital 2',
      address: 'Hospital 2 address',
      contact: '01*********'
    },
    {
      id: 3,
      name: 'c Hospital 3',
      address: 'Hospital 3 address',
      contact: '01*********'
    }
  ];
}
