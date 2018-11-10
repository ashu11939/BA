import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-box',
  templateUrl: './stats-box.component.html',
  styleUrls: ['./stats-box.component.css']
})
export class StatsBoxComponent implements OnInit {

  @Input() private heading: string;
  @Input() private description: string;
  @Input() private value: string;
  @Input() private name: string;
  
  constructor() { }

  ngOnInit() {
    
  }

}
