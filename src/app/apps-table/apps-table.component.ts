import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router';

export interface Apps {
  app_name: string;
  applicationId: number;
  last_modified_date: string;
  edit:any|null;
  delete:any|null;
}

const ELEMENT_DATA: Apps[] = [
  {applicationId: 1, app_name: 'Loan Application', last_modified_date: "2023-04-10", edit: "", delete: ""},
  {applicationId: 2, app_name: 'Leave Application', last_modified_date: "2023-03-23", edit: "", delete: ""},
  {applicationId: 3, app_name: 'Vote Eligibility', last_modified_date: "2023-03-29", edit: "", delete: ""},
  {applicationId: 4, app_name: 'Stock Manager', last_modified_date: "2023-04-05", edit: "", delete: ""},
];

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})

export class AppsTableComponent {
  displayedColumns: string[] = ['applicationId', 'app_name', 'last_modified_date','edit', 'delete'];
  dataSource = ELEMENT_DATA;
  constructor(private router:Router) {

  }

  deleteRow(index: number) 
  {
    this.dataSource = this.dataSource.filter((item => item.applicationId !== index))
  }

  goto(row:any){
    this.router.navigate([`rule-sets/${row.applicationId}`]);
    console.log(row);
  }
}
