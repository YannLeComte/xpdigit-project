import {Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {StationInterface} from '../../../../dataInterfaces/Station';

@Component({
  selector: 'app-station-map',
  templateUrl: './station-map.component.html',
  styleUrls: ['./station-map.component.css']
})
export class StationMapComponent implements OnChanges {
  @Input() stationList: StationInterface[];
  @Input() selectedStation: StationInterface;
  openedWindow: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedStation.currentValue) {
      this.openedWindow = changes.selectedStation.currentValue.idstation;
    }
  }

  isInfoWindowOpen(id) {
    return this.openedWindow === id;
  }

  windowOpen(id) {
    this.openedWindow = id;
  }
}
