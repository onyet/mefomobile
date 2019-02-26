import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [];

  constructor(public navCtrl: NavController) {

  }

  doRefresh(refresher) {

    console.log('Begin async operation', refresher);

    setTimeout(() => {
    
      console.log('Async operation has ended');
    
      refresher.complete();
    
    }, 2000);
  
  } // end doRefresh

  doInfinite(infiniteScroll): Promise<any> {

    console.log('Begin async operation');

    return new Promise((resolve) => {
    
      setTimeout(() => {
    
        for (var i = 0; i < 30; i++) {
    
          this.items.push( this.items.length );
    
        }

        console.log('Async operation has ended');
    
        resolve();

        infiniteScroll.complete();
    
      }, 500);
    
    });

  } // end doInfinite

}
