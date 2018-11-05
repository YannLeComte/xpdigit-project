import {Component, Input, Output, OnInit, ViewChild, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {StationInterface} from '../../../../dataInterfaces/Station';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationListComponent implements OnInit {
  @Input() stationList: StationInterface[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Object>;
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

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.stationList);
    this.dataSource.sort = this.sort;
  }

  stationSelected (station) {
    this.selectedStation.emit(station);
  }

  constructor() {}
}
