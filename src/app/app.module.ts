import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Angular google maps*/
import { AgmCoreModule } from '@agm/core';

/* import {AngularOpenlayersModule} from 'ngx-openlayers'; */

/* Angular material */
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';

/* Perfect scrollbar */
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {ScrollDispatchModule} from '@angular/cdk/scrolling';

/* App components */
import { AppComponent } from './ui/components/app.component';
import { StationListComponent } from './ui/components/body/station-list/station-list.component';
import { StationMapComponent } from './ui/components/body/station-map/station-map.component';
import { HeaderComponent } from './ui/components/header/header.component';
import { BodyComponent } from './ui/components/body/body.component';

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
    ScrollDispatchModule,
    PerfectScrollbarModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlRUYIg1QCPOLE1pJplN9ok7wCwd8veVo'
    })
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
