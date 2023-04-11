import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './applications/applications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsTableComponent } from './apps-table/apps-table.component';
import { MatTableModule } from '@angular/material/table'  
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { RuleSetsComponent } from './rule-sets/rule-sets.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    AppsTableComponent,
    RuleSetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
