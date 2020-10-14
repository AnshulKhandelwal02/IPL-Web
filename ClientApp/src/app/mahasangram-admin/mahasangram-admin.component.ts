import {AfterViewInit, Component, ViewChild, Inject, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {DataSource} from '@angular/cdk/collections';
import { IApiResponse, TeamSummary, TeamDataList, DataResponse } from "../models";


@Component({
  selector: 'app-mahasangram-admin',
  templateUrl: './mahasangram-admin.component.html',
  styleUrls: ['./mahasangram-admin.component.css']
})
export class MahasangramAdminComponent implements OnInit {
  title = 'ClientApp';
  displayedColumns: string[];
  isLoading = false;

  baseUrl: string = 'https://ipl-data.azurewebsites.net/';
  // baseUrl: string = 'https://localhost:44327/';

  dataSource: MatTableDataSource<TeamSummary>;  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private readonly _http: HttpClient) {
    
  }

  ngOnInit() {
    this.getSummaryData();
  }

  getSummaryData() {
    this.isLoading = true;
    this._http.get<IApiResponse<DataResponse>>(this.baseUrl + 'data/mahasangram-summary-admin').subscribe(result => {
      console.log(result);
      this.isLoading = false;
      //this.teamSummary = result.data;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(result.data.summaryData);
      this.displayedColumns = result.data.columnsList;

      this.dataSource.sort = this.sort;
    }, error => {
      console.error(error)
      this.isLoading = false;
    });
  }
}
