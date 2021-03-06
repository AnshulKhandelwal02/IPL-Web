import {AfterViewInit, Component, ViewChild, Inject, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {DataSource} from '@angular/cdk/collections';
import { IApiResponse, TeamSummary, TeamDataList, DataResponse, ApiRef } from "../models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'IPL-2020';
  displayedColumns: string[];
  isLoading = false;
  matchday: number;

  baseUrl: string = ApiRef.baseUrl;

  dataSource: MatTableDataSource<TeamSummary>;  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private readonly _http: HttpClient) {
    
  }

  ngOnInit() {
    this.getSummaryData();
  }

  getSummaryData() {
    this.isLoading = true;
    this._http.get<IApiResponse<DataResponse>>(this.baseUrl + 'data/summary').subscribe(result => {
      console.log(result);
      this.isLoading = false;
      //this.teamSummary = result.data;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(result.data.summaryData);
      this.displayedColumns = result.data.columnsList;
      this.matchday = result.data.matchDay;

      this.dataSource.sort = this.sort;
    }, error => {
      console.error(error)
      this.isLoading = false;
    });
  }
}
