import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '../location.model';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  term: string;
  private subscription: Subscription;
  contactId: string = '';
  search(value: string) {
    this.term = value;
  }
  @Output() selectedLocationEvent = new EventEmitter<Location>();
locations: Location[] = [];
  constructor(private locationService: LocationService) { }
  ngOnInit(): void {
    this.locationService.locationListChangedEvent.subscribe((locationsList: Location[]) => {
      this.locations = locationsList;
    })
    this.locationService.getLocations();
  }

}
