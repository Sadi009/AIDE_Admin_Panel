import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  catagories = [
    {
      name: 'A1'
    },
    {
      name: 'A2'
    },
    {
      name: 'A3'
    },
    {
      name: 'A4'
    },
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  onEdit(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

}
