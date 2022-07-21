import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location.model';
import { LocationService } from '../location.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  selectedLocation: Location;
  mapUrl: string = ''; 
  updateMapUrl() {
    const urlOne = "http://maps.google.com/maps?q=" + this.selectedLocation.latitude;
    const urlTwo =  this.selectedLocation.longitude +"&z=2&output=embed";
    this.mapUrl = urlOne + ", " + urlTwo;
  }
  id: string;
  getSafeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);}
  constructor(private sanitizer: DomSanitizer, private locationService: LocationService, private router: Router, private route: ActivatedRoute) {
   }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = String(+params['id']);
     this.locationService.getLocation(this.id).subscribe(cData => {
      this.selectedLocation = cData.location;
     })
    });
}
}

