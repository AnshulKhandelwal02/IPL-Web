import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GokuldhamComponent } from './gokuldham/gokuldham.component';
import { MahasangramComponent } from './mahasangram/mahasangram.component';
import { HomeComponent } from './home/home.component';
import { MahasangramAdminComponent } from './mahasangram-admin/mahasangram-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuldhamComponent,
    MahasangramComponent,
    HomeComponent,
    MahasangramAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  // exports: [
  //   MatDatepickerModule,
  //   MatIconModule,
  //   MatInputModule,
  //   MatPaginatorModule,
  //   MatProgressSpinnerModule,
  //   MatSortModule,
  //   MatTableModule,
  //   MatTooltipModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
