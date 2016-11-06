import lodash from 'lodash';

import properties from '../providers/mock-properties';

import { Dispatcher, StateReducer } from './common';
import {
  Action,
  RequestBrokersAction, RequestBrokerAction,
  RequestPropertiesAction, RequestPropertyAction, RequestPropertiesByNameAction,
  AddFavoriteAction, RemoveFavoriteAction,
} from './actions';


export const brokersReducer: StateReducer<Broker[]> =
  (initState: Broker[], dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<Broker[]>((state, action) => {
      if (action instanceof RequestBrokersAction) {
        return action.brokers;
      } else {
        return state;
      }
    }, initState);


export const selectedBrokerReducer: StateReducer<Broker> =
  (initState: Broker, dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<Broker>((state, action) => {
      if (action instanceof RequestBrokerAction) {
        return action.broker;
      } else {
        return state;
      }
    }, initState);


export const propertiesReducer: StateReducer<Property[]> =
  (initState: Property[], dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<Property[]>((state, action) => {
      if (action instanceof RequestPropertiesAction) {
        return action.properties;
      } else if (action instanceof RequestPropertiesByNameAction) {
        const key: string = action.searchKey.toUpperCase();
        const filtered: Property[] = properties.filter(property =>
          (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1);
        return [...filtered];
      } else {
        return state;
      }
    }, initState);


export const selectedPropertyReducer: StateReducer<Property> =
  (initState: Property, dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<Property>((state, action) => {
      if (action instanceof RequestPropertyAction) {
        return action.property;
      } else {
        return state;
      }
    }, initState);


export const favoritesReducer: StateReducer<Property[]> =
  (initState: Property[], dispatcher$: Dispatcher<Action>) =>
    dispatcher$.scan<Property[]>((state, action) => {
      if (action instanceof AddFavoriteAction) {
        return [...state, action.property];
      } else if (action instanceof RemoveFavoriteAction) {
        const rejected: Property[] = lodash.reject(state, { id: action.property.id });
        return [...rejected];
      } else {
        return state;
      }
    }, initState);
