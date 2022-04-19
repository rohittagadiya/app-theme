import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { DashboardPage } from '../dashboard/dashboard.page';
import {ListPage} from '../list/list.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contactsPage = DashboardPage;
  profilePage = ListPage;

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  tabs: any[] = [];

  constructor(private data: DataService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
