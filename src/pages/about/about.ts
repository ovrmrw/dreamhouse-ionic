import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    console.log('constructor');
  }

  ionViewCanEnter() { console.log('ionViewCanEnter'); }

  ngOnInit() { console.log('ngOnInit'); }

  ngAfterViewInit() { console.log('ngAfterViewInit'); }

  ionViewDidLoad() { console.log('ionViewDidLoad'); }

  ionViewWillEnter() { console.log('ionViewWillEnter'); }

  ionViewDidEnter() { console.log('ionViewDidEnter'); }
  


  ionViewCanLeave() { console.log('ionViewCanLeave'); }

  ionViewWillLeave() { console.log('ionViewWillLeave'); }

  ionViewDidLeave() { console.log('ionViewDidLeave'); }

  ionViewWillUnload() { console.log('ionViewWillUnload'); }

}
