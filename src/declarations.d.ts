/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.

  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.

  To learn more about using third party libraries in an Ionic app, check out the docs here:
  http://ionicframework.com/docs/v2/resources/third-party-libs/

  For more info on type definition files, check out the Typescript docs here:
  https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
declare module '*';


declare interface Broker {
  id: number;
  name?: string;
  firstName?: string;
  lastName?: string;
  title: string;
  phone?: string;
  mobilePhone?: string;
  email?: string;
  picture: string;
}


declare interface Property {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: string;
  title: string;
  bedrooms: number,
  bathrooms: number,
  long: number,
  lat: number,
  pic: string;
  thumb: string;
  tags: string;
  description: string;
  broker: Broker;
}