import { Component, OnInit, OnDestroy } from '@angular/core';
import { Config, NavController } from 'ionic-angular';

import { PropertyService } from '../../providers/property-service-mock';
import { PropertyDetailPage } from '../property-detail/property-detail';
import 'leaflet';
import { Store } from '../../store';
import { DisposerService } from '../../shared';


@Component({
  selector: 'page-property-list',
  templateUrl: 'property-list.html'
})
export class PropertyListPage implements OnInit {

  properties: Array<Property>;
  searchKey: string = "";
  viewMode: string = "list";
  map;
  markersGroup;


  constructor(
    public navCtrl: NavController,
    public propertyService: PropertyService,
    public config: Config,
    public store: Store,
    public disposer: DisposerService,
  ) { }


  ngOnInit() { }


  ionViewWillEnter() {
    this.disposer.disposeSubscriptions().register(
      this.store.getState().subscribe(state => this.properties = state.properties),
    );

    if (this.searchKey) {
      this.propertyService.requestPropertiesByName(this.searchKey);
    } else {
      this.propertyService.requestAllProperties();
    }
  }


  openPropertyDetail(property: Property): void {
    this.navCtrl.push(PropertyDetailPage, { id: property.id });
  }


  onInput(event: KeyboardEvent): void {
    this.propertyService.requestPropertiesByName(this.searchKey)
      .then(() => {
        if (this.viewMode === "map") {
          this.showMarkers();
        }
      });
  }


  onCancel(event: KeyboardEvent): void {
    this.propertyService.requestAllProperties();
  }


  showMap(): void {
    setTimeout(() => {
      this.map = L.map("map").setView([42.361132, -71.070876], 14);
      L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
      }).addTo(this.map);
      this.showMarkers();
    })
  }


  showMarkers(): void {
    if (this.markersGroup) {
      this.map.removeLayer(this.markersGroup);
    }
    this.markersGroup = L.layerGroup([]);
    this.properties.forEach(property => {
      let marker: any = L.marker([property.lat, property.long]).on('click', event => this.openPropertyDetail(event.target.data));
      marker.data = property;
      this.markersGroup.addLayer(marker);
    });
    this.map.addLayer(this.markersGroup);
  }

}
