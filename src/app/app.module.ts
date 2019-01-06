import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimeComponent } from './Time-app/time/time.component';
import { TimeTableComponent } from './Time-app/time-table/time-table.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceAlbumComponent } from './dashboard/place-album/place-album.component';
import { PlaceFacilitiesComponent } from './dashboard/place-facilities/place-facilities.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TimeTableComponent,
    LoginComponent,
    DashboardComponent,
    PlaceAlbumComponent,
    PlaceFacilitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DpDatePickerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
