import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnamM3dbZjWKY-tyZahqvXy_HEdU83B3I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
