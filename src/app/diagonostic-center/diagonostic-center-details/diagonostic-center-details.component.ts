import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from "@angular/router";
import { DiagonosticService } from '../../services/diagonosticService/diagonosticService';

@Component({
  selector: 'app-diagonostic-center-details',
  templateUrl: './diagonostic-center-details.component.html',
  styleUrls: ['./diagonostic-center-details.component.css']
})
export class DiagonosticCenterDetailsComponent implements OnInit {
  diagnosticDetails;
  test_type = [];
  tests;
  details;
  typeName;
  test_name;
  price;
  search;
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private diagnosticService: DiagonosticService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.diagnosticDetails = params;
    });
    let id = this.diagnosticDetails.id;
    this.diagnosticService.getDiagonosticCentersDetails(id).subscribe(res => {
      this.tests = res.data().tests;
      for(let i in this.tests) {
        this.test_type.push(i);
      }
    });
    console.log(this.tests);
  }

  getDetails(name) {
    this.details = this.tests[name];
  }
  onOpenModel(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  createNew() {
    let id = this.diagnosticDetails.id;
    let name = this.typeName;
    let obj = {};
    obj[name] = [];
    
    this.diagnosticService.addTestName(id, obj).then(() => {
      this.test_type.push(name);
    });
  }

  createDetail(name) {
    let id = this.diagnosticDetails.id;
    let obj = {name: this.test_name, price: this.price};
    
    this.diagnosticService.addTestDetails(id, name, obj).then(() => {
      this.details.push(obj);
    });
  }
  
  editDetail(name, data, index) {
    let obj = {
      id: this.diagnosticDetails.id,
      name: name,
      data: data,
      index: index
    }

    this.diagnosticService.editTests(obj);
  }

  deleteSubTest(test, i) {
    let war = confirm("Are you sure to delete this?");
    if(war) {
      this.diagnosticService.deleteSubTest(this.diagnosticDetails.id, test, i).then(() => {
        this.details.splice(i, 1);
      });
    }
  }
}
