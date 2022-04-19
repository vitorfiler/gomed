import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { ScrollbarModule } from 'src/@vex/components/scrollbar/scrollbar.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ScrollbarModule,
    MatSnackBarModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    PageLayoutModule,
    MatNativeDateModule,
    IconModule,
    ContainerModule
  ],
})
export class CalendarModule {
}