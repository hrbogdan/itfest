import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../service/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  constructor(public eventsService: EventService) {}

  ngOnInit(): void {}

  public editEvent(event: Event) {
    // this.eventsService.editEvent(event).subscribe(());
  }
}
