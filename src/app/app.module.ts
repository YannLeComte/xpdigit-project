import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
