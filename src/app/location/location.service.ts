import { Injectable, EventEmitter } from '@angular/core';
import { Location } from './location.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url = 'http://localhost:3000/location/';
  locations: Location[] = [];
  locationSelectedEvent = new EventEmitter<Location>();
  locationChangedEvent = new EventEmitter<Location[]>();
  locationListChangedEvent = new Subject<Location[]>();
  getLocations() {
    this.http.get<{message: string, location: Location[]}>(this.url)
  .subscribe(
    (responseData) => {
      this.locations = responseData.location;
      this.sortAndSend();
    }, 
    (error: any) => {
      console.log(error);
    });
  }
  getLocation(id: string) {
    return this.http.get<{message:string, location: Location}>(this.url+id);
  }
  sortAndSend() {
    this.locations?.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    this.locationListChangedEvent.next(this.locations.slice());
  }
  constructor(private http: HttpClient) { }
}
