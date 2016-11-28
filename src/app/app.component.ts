import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { PageMap } from '../pages/map/map';
import { PageNews } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageMap;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Hartă', icon: 'home', component: PageMap },
      { title: 'Știri', icon: 'book', component: PageNews }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
