import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Default Name';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  paraVisible = true;
  paraClickCounter = [];
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' +  this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
  changeParaVisibility(){
    this.paraVisible = !this.paraVisible;
    this.paraClickCounter.push(this.paraClickCounter.length + 1);
  }
  assignColor(counterIndex: number){
    return {
      backgroundColor: counterIndex >= 4 ? 'blue' : 'transparent'
    }
  }
  assignClass(counterIndex: number){
    return {'white-text': (counterIndex >= 4) };
  }
}
