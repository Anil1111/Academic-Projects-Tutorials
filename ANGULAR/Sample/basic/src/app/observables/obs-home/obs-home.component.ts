import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-obs-home',
  templateUrl: './obs-home.component.html',
  styleUrls: ['./obs-home.component.css'],
})
export class ObsHomeComponent implements OnInit, OnDestroy {
  // private firstObsSubscription: Subscription;
  private secondObsSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    // custom Observable
    // built in function that gives an observable that fires an event every 1000ms
    // can cause memory leaks if not unsubscribed, as a new subscription is fired every time the component is laoded
    // the observable stop emitting event once we navigate away from the component
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // observer is interested about the data, errors and completion of the observable
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        // method used to emit the next value
        observer.next(count);

        // observer.complete(); // method used to tell observer that you are done
        if (count === 2) {
          observer.complete();
        }

        // observer.error(); // method used to throw an error
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
          // observer throwing an error; observable will not throw any further events and will cease to exist; observable
        }
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable
      .pipe(
        filter(data => {
          return data > 0; // return all data greater than 0
        }),
        map((data: number) => { // map outputs an observable by applying the function on each value
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data); // handling all events fired
        },
        (error) => {
          console.log(error); // handling the error
        },
        () => {
          console.log('Completed!'); // handling the completion of events
        }
      );
  }

  ngOnDestroy() {
    // this.firstObsSubscription.unsubscribe();
    this.secondObsSubscription.unsubscribe();
  }
}
