import { Component, OnInit} from '@angular/core';
import { StationsService } from '../../../services/stations.service';
import { StationInterface } from '../../../dataInterfaces/Station';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public stationList: StationInterface[];
  public selectedStation: StationInterface;
  isDataLoaded: boolean;

  constructor(private stationsService: StationsService) {
  }

  ngOnInit() {
    this.isDataLoaded = false;
    this.getStationList();
  }

  /* When a station is selected in the list, update the parameter */
  onSelectedStation(selectedStation): void {
    this.selectedStation = selectedStation;
  }

  getStationList(): void {
    /* Get the number of stations*/
    this.stationsService.getNumberOfStations().then((nbStations: any) => {
      /* Get the list of stations */
      this.stationsService.getStations(nbStations).then((stations: any) => {
        this.stationList = stations;
        this.selectedStation = this.stationList[0];
        this.isDataLoaded = true;
      });
    });
  }
}
