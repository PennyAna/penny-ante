import { Pipe, PipeTransform } from '@angular/core';
import { Location } from './location.model';

@Pipe({
  name: 'locationFilter', 
  pure: false
})
export class LocationFilterPipe implements PipeTransform {

  transform(locations: Location[], term: string): any {
    let filteredLocations: Location[] = [];
    if(term && term.length > 0) {
      filteredLocations = locations.filter(
        (location: Location) =>
        location.name.toLowerCase().includes(term.toLowerCase())
        );
      }  
      if (filteredLocations.length < 1) {
        return locations;
      }
            return filteredLocations;
  }
}

