import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Angular google maps*/
import { AgmCoreModule } from '@agm/core';
import {AngularOpenlayersModule} from 'ngx-openlayers';

/* Angular material */
import {MatTableModule} from '@angular/material/table';

/* App components */
import { AppComponent } from './ui/app.component';
import { StationListComponent } from './ui/station-list/station-list.component';
import { StationMapComponent } from './ui/station-map/station-map.component';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    AngularOpenlayersModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlRUYIg1QCPOLE1pJplN9ok7wCwd8veVo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
