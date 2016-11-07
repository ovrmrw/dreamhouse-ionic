import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';

import { Store } from '../../store';
import { DisposerService } from '../../shared';


@Component({
  selector: 'page-broker-detail',
  templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage implements OnInit {

  broker: Broker;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public brokerService: BrokerService,
    public store: Store,
    public disposer: DisposerService,
  ) { }


  ngOnInit() { }


  ionViewWillEnter() {
    this.disposer.disposeSubscriptions().register(
      this.store.getState().subscribe(state => this.broker = state.selectedBroker),
    );

    const id: number = this.navParams.data.id;
    this.brokerService.requestBrokerById(id);
  }

}
