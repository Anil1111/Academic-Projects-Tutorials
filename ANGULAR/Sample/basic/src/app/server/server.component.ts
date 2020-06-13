import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 2;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';

  }
}
