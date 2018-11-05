import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { StationInterface } from '../dataInterfaces/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http: HttpClient) {
  }

  /* Return the number of stations */
  getNumberOfStations(): Promise<Object> {
    let stationsList = [];
    return this.http.get('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&rows=0')
      .toPromise()
      .then((data: any) => {
        return data.nhits;
      });
  }

  /* Return a list of stations, given number of element */
  getStations(numberOfRows): Promise<Object> {
    let stationsList = [];
    return this.http.get('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&rows=' + numberOfRows + '&facet=nom&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles&facet=nombrevelosdisponibles')
      .toPromise()
      .then((data: any) => {
        return this.jsonToStationInerface(data);
      });
  }

  /* Convert a JSON to a list of StationInterface */
  jsonToStationInerface(json): StationInterface[] {
    let stationsList = [];
    if (json.records) {
      for (let station of  json.records) {
        let fields = station.fields;
        let stationI: StationInterface = {
          idstation: fields.idstation || '',
          nom: fields.nom || '',
          coordonnees: fields.coordonnees || [],
          etat: fields.etat || '',
          nombreemplacementsactuels: fields.nombreemplacementsactuels || 0,
          nombreemplacementsdisponibles: fields.nombreemplacementsdisponibles || 0,
          nombrevelosdisponibles: fields.nombrevelosdisponibles || 0,
          lastupdate: fields.lastupdate || ''
        };
        stationsList.push(stationI);
      }
    }
    return stationsList;
  }
}
