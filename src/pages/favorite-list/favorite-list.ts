import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { PropertyService } from '../../providers/property-service-mock';
import { PropertyDetailPage } from '../property-detail/property-detail';

import { Store } from '../../store';
import { DisposerService } from '../../shared';


@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html'
})
export class FavoriteListPage implements OnInit {

  properties: Array<Property>;


  constructor(
    public navCtrl: NavController,
    public propertyService: PropertyService,
    public store: Store,
    public disposer: DisposerService,
  ) { }


  ngOnInit() { }


  ionViewWillEnter() {
    this.disposer.disposeSubscriptions();
    this.disposer.sub = this.store.getState().subscribe(state => this.properties = state.favorites);
  }


  itemTapped(property: Property): void {
    this.navCtrl.push(PropertyDetailPage, { id: property.id });
  }


  deleteItem(property: Property): void {
    this.propertyService.unfavorite(property);
  }

}
