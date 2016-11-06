export class RequestBrokersAction {
  constructor(public brokers: Broker[]) { }
}

export class RequestBrokerAction {
  constructor(public broker: Broker) { }
}

export class RequestPropertiesAction {
  constructor(public properties: Property[]) { }
}

export class RequestPropertyAction {
  constructor(public property: Property) { }
}

export class RequestPropertiesByNameAction {
  constructor(public searchKey: string) { }
}

export class AddFavoriteAction {
  constructor(public property: Property) { }
}

export class RemoveFavoriteAction {
  constructor(public property: Property) { }
}


type DreamHouseAction =
  RequestBrokersAction | RequestBrokerAction |
  RequestPropertiesAction | RequestPropertyAction | RequestPropertiesByNameAction |
  AddFavoriteAction | RemoveFavoriteAction;

export type Action = DreamHouseAction;
