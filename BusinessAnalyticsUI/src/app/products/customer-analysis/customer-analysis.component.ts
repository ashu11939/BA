import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-analysis',
  templateUrl: './customer-analysis.component.html',
  styleUrls: ['./customer-analysis.component.css']
})
export class CustomerAnalysisComponent implements OnInit {

  max: string = "Max Credit";
  constructor() { }

  ngOnInit() {
  }

}
