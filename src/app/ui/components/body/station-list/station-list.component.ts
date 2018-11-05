import {Component, Input, Output, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {StationInterface} from '../../../../dataInterfaces/Station';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  @Input() stationList: StationInterface[];
  @ViewChild(MatSort) sort: MatSort;
  stationListDataSource: MatTableDataSource<Object>;
  @Output() selectedStation = new EventEmitter<StationInterface>();

  displayedColumns: string[] = [
    'index',
    'idstation',
    'nom',
    'coordonnees',
    'etat',
    'nombreemplacementsactuels',
    'nombreemplacementsdisponibles',
    'nombrevelosdisponibles',
    'lastupdate'
  ];

  constructor() {
  }

  /* Init the data for the angular material table (mat-table) */
  ngOnInit() {
    this.stationListDataSource = new MatTableDataSource(this.stationList);
    this.stationListDataSource.sort = this.sort;
  }

  /* Output the selected station */
  stationSelected (station) {
    this.selectedStation.emit(station);
  }
}
