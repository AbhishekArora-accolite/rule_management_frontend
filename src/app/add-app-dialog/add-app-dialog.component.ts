import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApplicationsDataService } from '../services/applications-data.service'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-app-dialog',
  templateUrl: './add-app-dialog.component.html',
  styleUrls: ['./add-app-dialog.component.css']
})

export class AddAppDialogComponent implements OnInit{
  constructor(private applicationData:ApplicationsDataService, @Inject(MAT_DIALOG_DATA) public data: any, private Ref: MatDialogRef<AddAppDialogComponent>){}
  result:any;

  ngOnInit(): void {
    this.result=this.data; 
  }

  submit(appName:any, appDesc:any, appURL:any)
  {
    this.result = { 
      appName: appName,
      appDesc: appDesc,
      appURL: appURL
    }
    this.Ref.close(this.result);
  }

  unameFormControl = new FormControl('', [
    Validators.required,   
    ]);
}
