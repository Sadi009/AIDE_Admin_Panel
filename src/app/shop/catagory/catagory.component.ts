import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CatagoryService } from 'src/app/services/shopService/catagory.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  search;
  catagories = [];
  name;
  module;
  constructor(private catagoryService: CatagoryService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCatagory();
  }
  getCatagory() {
    this.catagoryService.getCatagory().subscribe(res => {
      res.forEach(result => {
        this.catagories.push(result.data());
      });
    });
  }
  onOpenDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  onSubmit() {
    const data = {
      name: this.name,
      module: this.module
    };
    this.catagoryService.addCatagory(data).then(res => { });
    if (data === null) {
      return;
    }
    this.catagories.push(data);
    this.name = "";
    this.module = "";
  }
  onUpdate(data) {
    console.log(data);
    this.catagoryService.editCatagroy(data);
    this.name = '';
    this.module = '';
  }
  onDeleteCatagory(data) {
    const msg = confirm('Are You Sure you want to delete?');
    if (msg === true) {
      this.catagoryService.deleteCatagroy(data.id);
      const index = this.catagories.indexOf(data);
      this.catagories.splice(index, 1);
      console.log(data.id);
    }
  }
}
