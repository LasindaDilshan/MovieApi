import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, Icon, latLng, marker, Marker, tileLayer } from 'leaflet';
import { __values } from 'tslib';
import { coordinatesMap } from './coordinateMap';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  constructor()
  {

  }
  ngOnInit(): void {
    this.layers = this.intialCoordinate.map(value => marker([ Number(value.latitude) , Number(value.longitude) ], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
  }
  @Input() intialCoordinate : coordinatesMap[]=[];
  @Output() onSelectedLocation = new EventEmitter<coordinatesMap>();
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

   layer = marker([ 46.879966, -121.726909 ], {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  });
  layers: Marker<any> [] =[];
  handleClick($event:any)
  {
    console.log($event)

    const latitude = $event.latlng.lat;
    const longitude = $event.latlng.lng;
    console.log(latitude,longitude);
    this.layers=[];
    this.layers.push(marker([latitude,longitude],
      {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }));
      this.onSelectedLocation.emit({latitude,longitude});


  }
}
