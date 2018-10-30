import { Component } from '@angular/core';
import { StationsService } from '../services/stations.service';
import { StationInterface } from '../dataInterfaces/station';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xpdigit-project';
  public stationList: StationInterface[];

  constructor(private stationsService: StationsService) {
    this.stationList = [];
    this.getStationList();
  }

  getStationList(): void {
    this.stationsService.getStations().then((data: any) => {
      this.stationList = data;
    });
  }
}
