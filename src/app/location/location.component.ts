import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Location } from './location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'], 
})
export class LocationComponent implements OnInit {
  selectedLocation: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.locationSelectedEvent.subscribe((location: Location) => {this.selectedLocation = location;})
  }

}
