/* Angular modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Angular google maps*/
import { AgmCoreModule } from '@agm/core';

/* Angular material */
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';

/* App components */
import { AppComponent } from './ui/components/app.component';
import { StationListComponent } from './ui/components/body/station-list/station-list.component';
import { StationMapComponent } from './ui/components/body/station-map/station-map.component';
import { HeaderComponent } from './ui/components/header/header.component';
import { BodyComponent } from './ui/components/body/body.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationMapComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlRUYIg1QCPOLE1pJplN9ok7wCwd8veVo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
