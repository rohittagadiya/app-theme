import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
