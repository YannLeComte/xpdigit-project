import {Component, Input, OnInit} from '@angular/core';
import {StationInterface} from '../../dataInterfaces/Station';

@Component({
  selector: 'app-station-map',
  templateUrl: './station-map.component.html',
  styleUrls: ['./station-map.component.css']
})
export class StationMapComponent implements OnInit {
  @Input() stationList: StationInterface[];

  constructor() { }

  ngOnInit() {
  }
}
