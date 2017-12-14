import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventItemComponent } from './event-item/event-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventsListComponent, EventItemComponent],
  exports: [EventsListComponent, EventItemComponent]
})
export class EventsManager { }
