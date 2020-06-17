import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'Test server', content: 'Just a test!' },
  ];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  ngOnInit(): void {}

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'chnaged';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1); // removing the first element
  }

  onNumberEmitted(counter: number) {
    console.log(counter);
    if (counter % 2 === 0) {
      this.evenNumbers.push(counter);
      return;
    }
    this.oddNumbers.push(counter);
  }

  getColorOrClass(counter: number) {
    if (counter % 2 === 0) {
      return true;
    }
    return 'blue';
  }
}
