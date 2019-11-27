import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: Map;

  constructor() {}

  private loadmap() {
    this.map = new Map('map').setView([41.84959,12.57446], 8);

    tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxlbmRvIiwiYSI6ImNrM2ViaXVyZjFlNmszYnFqMHB0bmFmbGcifQ.JHTD6PbUodS4XngjM53FUQ', {
       // tslint:disable-next-line
      attribution: "© Mapbox, © OpenStreetMap",
      maxZoom: 18
    }).addTo(this.map);
  }

  private ionViewDidEnter() {
        this.loadmap();
  }

}
