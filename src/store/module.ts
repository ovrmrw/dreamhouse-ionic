import { NgModule } from '@angular/core';

import { Dispatcher, createDispather } from './common';
import { Store } from './store';


@NgModule({
  providers: [
    { provide: Dispatcher, useFactory: createDispather },
    Store,
  ],
})
export class StoreModule { }
