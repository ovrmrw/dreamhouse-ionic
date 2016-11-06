import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Dispatcher, Provider, ReducerContainer } from './common';
import { Action } from './actions';
import {
  brokersReducer, selectedBrokerReducer,
  propertiesReducer, selectedPropertyReducer,
  favoritesReducer,
} from './reducers';


export interface AppState {
  counter: number;
  timestamp: number | null;
  brokers: Broker[],
  selectedBroker: Broker | null,
  properties: Property[],
  selectedProperty: Property | null,
  favorites: Property[],
}


const initialState: AppState = {
  counter: 0,
  timestamp: null,
  brokers: [],
  selectedBroker: null,
  properties: [],
  selectedProperty: null,
  favorites: []
};


@Injectable()
export class Store {
  readonly provider$: Provider<AppState>;

  constructor(
    private dispatcher$: Dispatcher<Action>
  ) {
    this.provider$ = new BehaviorSubject(initialState);
    this.combineReducers();
  }


  private combineReducers(): void {
    ReducerContainer
      .zip<AppState>(...[
        brokersReducer(initialState.brokers, this.dispatcher$),
        selectedBrokerReducer(initialState.selectedBroker, this.dispatcher$),
        propertiesReducer(initialState.properties, this.dispatcher$),
        selectedPropertyReducer(initialState.selectedProperty, this.dispatcher$),
        favoritesReducer(initialState.favorites, this.dispatcher$),

        (brokers, selectedBroker, properties, selectedProperty, favorites): AppState => {
          const obj = { brokers, selectedBroker, properties, selectedProperty, favorites };
          return Object.assign<{}, AppState, {}>({}, initialState, obj);
        }
      ])
      .subscribe(newState => {
        console.log('newState:', newState);
        this.provider$.next(newState);
      });
  }


  getState(): Observable<AppState> {
    return this.provider$;
  }

}
