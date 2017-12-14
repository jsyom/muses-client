import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservationListComponent],
  exports: [ReservationListComponent]
})
export class ReservationManager { }
