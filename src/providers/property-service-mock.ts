import { Injectable } from '@angular/core';
import lodash from 'lodash';
import assert from 'assert';

import properties from './mock-properties';
import {
  Dispatcher, Action,
  RequestPropertiesAction, RequestPropertyAction, RequestPropertiesByNameAction,
  AddFavoriteAction, RemoveFavoriteAction,
} from '../store';


@Injectable()
export class PropertyService {

  favorites: Property[] = [];


  constructor(
    public dispatcher$: Dispatcher<Action>,
  ) { }


  requestAllProperties(): void {
    properties.forEach(assertProperty);
    this.dispatcher$.next(new RequestPropertiesAction(properties));
  }


  requestPropertyById(id: number): void {
    assert(lodash.isNumber(id));
    const property = properties.find(p => p.id === id);
    assertProperty(property);
    this.dispatcher$.next(new RequestPropertyAction(property));
  }


  requestPropertiesByName(searchKey: string): Promise<void> {
    assert(lodash.isString(searchKey));
    this.dispatcher$.next(new RequestPropertiesByNameAction(searchKey));
    return Promise.resolve();
  }


  favorite(property: Property): Promise<void> {
    assertProperty(property);
    this.dispatcher$.next(new AddFavoriteAction(property));
    return Promise.resolve();
  }


  unfavorite(property: Property): void {
    assertProperty(property);
    this.dispatcher$.next(new RemoveFavoriteAction(property));
  }

}


function assertProperty(property: Property): void {
  assert(lodash.isObject(property), 'property should be Object type.');
  ['id'].forEach(key => assert(key in property, `property should have ${key}.`));
}
