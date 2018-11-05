import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {StationInterface} from '../../../../dataInterfaces/Station';

@Component({
  selector: 'app-station-map',
  templateUrl: './station-map.component.html',
  styleUrls: ['./station-map.component.css']
})
export class StationMapComponent implements OnChanges {
  @Input() stationList: StationInterface[];
  @Input() selectedStation: StationInterface;
  openedWindow: number;

  constructor() {
    this.openedWindow = 0;
  }

  /* When the selected station changes, open the information window in the map */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedStation.currentValue !== 0) {
      this.openedWindow = changes.selectedStation.currentValue.idstation;
    }
  }

  /* Update openedWindow, when a marker is selected*/
  windowOpen(id) {
    this.openedWindow = id;
  }
}
