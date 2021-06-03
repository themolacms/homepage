import { Component } from '@angular/core';

import {
  LocalstorageService,
  AppService,
  MetaService,
  NavService,
  SettingService,
} from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private localstorageService: LocalstorageService,
    private appService: AppService,
    private metaService: MetaService,
    public navService: NavService,
    private settingService: SettingService,
  ) {
    this.initialize();
  }

  
  private initialize() {
    this.localstorageService.init();
    this.appService.init({ splashScreen: true });
    this.settingService.init(
      {
        onReady: () => this.appService.hideSplashScreen(),
      },
      {},
      {
        localstorageService: this.localstorageService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
    this.metaService.init(
      {
        title: 'MolaCMS: Create a Free Web App',
        description: 'A modern CMS for building web app',
        image: 'https://mola.lamnhan.com/assets/images/featured.jpg',
        url: 'https://mola.lamnhan.com/',
        lang: 'en',
        ogLocale: 'en-US',
        ogSiteName: 'MolaCMS: Create a Free Web App'
      },
    );
  }

}
