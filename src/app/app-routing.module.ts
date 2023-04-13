import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { RuleSetsComponent } from './rule-sets/rule-sets.component';
import { AppsTableComponent } from './apps-table/apps-table.component';
import { AddAppDialogComponent } from './add-app-dialog/add-app-dialog.component';

const routes: Routes = [
  {
    path:'applications',
    component:ApplicationsComponent
  },
  {
    path:'rule-sets/:applicationId',
    component:RuleSetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
