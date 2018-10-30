import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { StationInterface } from '../dataInterfaces/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http: HttpClient) {
  }

  getStations(): Promise<Object> {
    let stationsList = [];
    return this.http.get('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&facet=nom&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles&facet=nombrevelosdisponibles')
      .toPromise()
      .then((data: any) => {
        console.log(data);
        return this.jsonToStationInerface(data);
      });
  }

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
