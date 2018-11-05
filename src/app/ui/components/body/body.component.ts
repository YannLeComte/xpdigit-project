import { Component } from '@angular/core';
import { StationsService } from '../../../services/stations.service';
import { StationInterface } from '../../../dataInterfaces/Station';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  stationList = [];
  public selectedStation: StationInterface;

  constructor(private stationsService: StationsService) {
    this.stationList = [];

    this.stationList = [
      {
        coordonnees: [48.109601, -1.67408],
        etat: 'En fonctionnement',
        idstation: '5510',
        lastupdate: '2018-11-05T14:50:08+00:00',
        nom: 'Musée Beaux-Arts',
        nombreemplacementsactuels: 16,
        nombreemplacementsdisponibles: 7,
        nombrevelosdisponibles: 9
      },
      {
        coordonnees: [48.104162, -1.671005],
        etat: 'En fonctionnement',
        idstation: '5515',
        lastupdate: '2018-11-05T14:50:08+00:00',
        nom: 'Gares - Solférino',
        nombreemplacementsactuels: 35,
        nombreemplacementsdisponibles: 30,
        nombrevelosdisponibles: 5,
      },
      {
        coordonnees: [48.102015, -1.684015],
        etat: 'En fonctionnement',
        idstation: '5520',
        lastupdate: '2018-11-05T14:50:08+00:00',
        nom: 'Pont de Nantes',
        nombreemplacementsactuels: 19,
        nombreemplacementsdisponibles: 9,
        nombrevelosdisponibles: 10,
      },
      {
        coordonnees: [48.106653, -1.68677],
        etat: 'En fonctionnement',
        idstation: '5523',
        lastupdate: '2018-11-05T14:50:08+00:00',
        nom: 'La Rotonde',
        nombreemplacementsactuels: 20,
        nombreemplacementsdisponibles: 10,
        nombrevelosdisponibles: 10
      },
      {
        coordonnees: [48.10524, -1.698107],
        etat: 'En fonctionnement',
        idstation: '5531',
        lastupdate: '2018-11-05T14:50:08+00:00',
        nom: 'Voltaire',
        nombreemplacementsactuels: 16,
        nombreemplacementsdisponibles: 8,
        nombrevelosdisponibles: 8
      },
      {
        coordonnees: [48.111749, -1.702077],
        etat: 'En fonctionnement',
        idstation: '5538',
        lastupdate: '2018-11-05T14:50:08+00:00',
        nom: 'Marbeuf',
        nombreemplacementsactuels: 20,
        nombreemplacementsdisponibles: 7,
        nombrevelosdisponibles: 13
      }
    ];
    // this.getStationList();
  }

  onSelectedStation(selectedStation): void {
    console.log(selectedStation);
    this.selectedStation = selectedStation;
  }

  getStationList(): void {
    this.stationsService.getStations().then((data: any) => {
      this.stationList = data;
      this.selectedStation = this.stationList[0];
    });
  }

}
