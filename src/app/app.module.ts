import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { TimeComponent } from './dashboard/Time-app/time/time.component';
import { TimeTableComponent } from './dashboard/Time-app/time-table/time-table.component';
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
    ImageCropperModule,
    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      }
    } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
