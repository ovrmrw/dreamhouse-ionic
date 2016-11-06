import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import lodash from 'lodash';
import assert from 'assert';

import brokers from './mock-brokers';
import { Dispatcher, Action, RequestBrokersAction, RequestBrokerAction } from '../store';


@Injectable()
export class BrokerService {

  constructor(
    public dispather$: Dispatcher<Action>,
  ) { }


  requestAllBrokers(): void {
    brokers.forEach(assertBroker);
    this.dispather$.next(new RequestBrokersAction(brokers));
  }


  requestBrokerById(id: number): void {
    const broker = brokers.find(b => b.id === id);
    assertBroker(broker);
    this.dispather$.next(new RequestBrokerAction(broker));
  }

}


function assertBroker(broker: Broker): void {
  assert(lodash.isObject(broker), 'broker should be Object type.');
  ['id'].forEach(key => assert(key in broker, `broker should have ${key}.`));
}
