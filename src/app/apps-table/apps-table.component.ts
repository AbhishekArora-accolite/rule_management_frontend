import { Component } from '@angular/core';

export interface Apps {
  app_name: string;
  position: number;
  last_modified_date: string;
  edit:any|null;
  delete:any|null;
}

const ELEMENT_DATA: Apps[] = [
  {position: 1, app_name: 'Loan Application', last_modified_date: "2023-04-10", edit: "", delete: ""},
  {position: 2, app_name: 'Leave Application', last_modified_date: "2023-03-23", edit: "", delete: ""},
  {position: 3, app_name: 'Vote Eligibility', last_modified_date: "2023-03-29", edit: "", delete: ""},
  {position: 4, app_name: 'Stock Manager', last_modified_date: "2023-04-05", edit: "", delete: ""},
];

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})

export class AppsTableComponent {
  displayedColumns: string[] = ['position', 'app_name', 'last_modified_date','edit', 'delete'];
  dataSource = ELEMENT_DATA;

  deleteRow(index: number) 
  {
    this.dataSource = this.dataSource.filter((item => item.position !== index))
  }
}
