import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActionSheetController, ActionSheet, NavController, NavParams, ToastController } from 'ionic-angular';

import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { PropertyService } from '../../providers/property-service-mock';
import { Store } from '../../store';
import { DisposerService } from '../../shared';


@Component({
  selector: 'page-property-detail',
  templateUrl: 'property-detail.html'
})
export class PropertyDetailPage implements OnInit {

  property: Property;


  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public propertyService: PropertyService,
    public toastCtrl: ToastController,
    public store: Store,
    public disposer: DisposerService,
  ) { }


  ngOnInit() { }


  ionViewWillEnter() {
    this.disposer.disposeSubscriptions().register(
      this.store.getState().subscribe(state => this.property = state.selectedProperty),
    );

    const id: number = this.navParams.data.id;
    this.propertyService.requestPropertyById(id);
  }


  openBrokerDetail(broker: Broker): void {
    this.navCtrl.push(BrokerDetailPage, { id: broker.id });
  }


  favorite(property: Property): void {
    this.propertyService.favorite(property)
      .then(() => {
        const toast = this.toastCtrl.create({
          message: 'Property added to your favorites',
          cssClass: 'mytoast',
          duration: 2000
        });
        toast.present(toast);
      });
  }


  share(property: Property): void {
    const actionSheet: ActionSheet = this.actionSheetCtrl.create({
      title: 'Share via',
      buttons: [
        {
          text: 'Twitter',
          handler: () => console.log('share via twitter')
        },
        {
          text: 'Facebook',
          handler: () => console.log('share via twitter')
        },
        {
          text: 'Email',
          handler: () => console.log('share via email')
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('cancel share')
        }
      ]
    });
    actionSheet.present();
  }

}
