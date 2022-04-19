import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { ListPageModule } from '../list/list.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    DashboardPageModule,
    ListPageModule,
    SuperTabsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
