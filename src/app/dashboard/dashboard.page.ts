import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  card_list: any = [
    { card_logo: './assets/icon/1.png', card_name: 'Manager' },
    { card_logo: './assets/icon/2.png', card_name: 'Manager' },
    { card_logo: './assets/icon/3.png', card_name: 'Manager' },
    { card_logo: './assets/icon/4.png', card_name: 'Manager' },
    { card_logo: './assets/icon/5.png', card_name: 'Manager' },
    { card_logo: './assets/icon/6.png', card_name: 'Manager' },
    { card_logo: './assets/icon/7.png', card_name: 'Manager' },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
