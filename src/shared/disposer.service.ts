import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Rx';


@Injectable()
export class DisposerService {

  private _subscriptions: Subscription[] = [];


  set sub(sub: Subscription) {
    this._subscriptions.push(sub);
    console.log('add subscription', this._subscriptions);
  }


  disposeSubscriptions(): void {
    console.log('disposeSubscriptions');
    this._subscriptions = this._subscriptions
      .map(sub => {
        sub.unsubscribe();
        return sub;
      })
      .filter(sub => !sub.closed);
  }

}
