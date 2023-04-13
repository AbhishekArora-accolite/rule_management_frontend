import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AddAppDialogComponent } from '../add-app-dialog/add-app-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationsDataService } from '../services/applications-data.service'

export interface Apps {
  app_name: string;
  applicationId: number;
  app_desc:string;
  last_modified_date: string;
  edit:any|null;
  delete:any|null;
}

const ELEMENT_DATA: Apps[] = [
  {applicationId: 1, app_name: 'Loan Application',app_desc:"Loan App", last_modified_date: "2023-04-10", edit: "", delete: ""},
  {applicationId: 2, app_name: 'Leave Application',app_desc:"Leave App", last_modified_date: "2023-03-23", edit: "", delete: ""},
  {applicationId: 3, app_name: 'Vote Eligibility',app_desc:"Voting App", last_modified_date: "2023-03-29", edit: "", delete: ""},
  {applicationId: 4, app_name: 'Stock Manager',app_desc:"Stock App", last_modified_date: "2023-04-05", edit: "", delete: ""},
];

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})

export class AppsTableComponent {
  displayedColumns: string[] = ['applicationId', 'app_name', 'app_desc', 'last_modified_date','edit', 'delete'];
  dataSource = ELEMENT_DATA;
  apps: any;
  constructor(private router:Router, private matDialog:MatDialog, private applicationData:ApplicationsDataService) {
    this.applicationData.getApplications().subscribe((data) => {
      console.log(data);
      // this.dataSource = this.dataSource.push(data); 
    })

  }

  deleteRow(index: number) 
  {
    this.applicationData.deleteApplication(index).subscribe((res) => {
      console.log("result", res);
    });
    this.dataSource = this.dataSource.filter((item => item.applicationId !== index));
  }

  goto(row:any){
    this.router.navigate([`rule-sets/${row.applicationId}`]);
  }

  popMenu() {
    const popup = this.matDialog.open(AddAppDialogComponent,{
      width: '30%',
      data: {
        appName: '',
        appDesc: '',
        appUrl: ''
      }
    });
    popup.afterClosed().subscribe(item => {
      console.log(item);
      this.applicationData.saveApplication(item).subscribe((res) => {
        console.log(res);
      })
    })
  }
  
}
