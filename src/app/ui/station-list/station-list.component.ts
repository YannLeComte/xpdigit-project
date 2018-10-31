import {Component, Input, OnInit} from '@angular/core';
import {StationInterface} from '../../dataInterfaces/Station';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  @Input() stationList: StationInterface[];
  ngOnInit() {
  }

  constructor() {}
}
