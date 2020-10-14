import {AfterViewInit, Component, ViewChild, Inject, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
    
  constructor(private readonly _http: HttpClient) {
    
  }

  ngOnInit() {
     // this.getSummaryData();
  }

  
}
