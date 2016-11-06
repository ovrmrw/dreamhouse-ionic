import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';
import { BrokerDetailPage } from '../broker-detail/broker-detail';

import { Store } from '../../store';
import { DisposerService } from '../../shared';


@Component({
  selector: 'page-broker-list',
  templateUrl: 'broker-list.html'
})
export class BrokerListPage implements OnInit {

  brokers: Array<Broker>;


  constructor(
    public navCtrl: NavController,
    public brokerService: BrokerService,
    public store: Store,
    public disposer: DisposerService,
  ) { }


  ngOnInit() { }


  ionViewWillEnter() {
    this.disposer.disposeSubscriptions();
    this.disposer.sub = this.store.getState().subscribe(state => this.brokers = state.brokers);

    this.brokerService.requestAllBrokers();
  }


  openBrokerDetail(broker: Broker): void {
    this.navCtrl.push(BrokerDetailPage, { id: broker.id });
  }

}
