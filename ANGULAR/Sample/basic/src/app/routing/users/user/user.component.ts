import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = 'id';
    const name = 'name';
    this.user = {
      id: this.route.snapshot.params[id],
      name: this.route.snapshot.params[name]
    };
    // subscribing to allow loading of the view with different route params that will cause angular to detect any change in URL
    // for making [routerLink]="['/routing/users', 10, 'Anna']" to work
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params[id];
      this.user.name = params[name];
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
