import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  userActivated = false;
  activateSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activateSub = this.userService.activatedEmitter.subscribe((didActivate: boolean) => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.activateSub.unsubscribe(); // subscription due to sujects needs to be unsubscribed
  }
}
