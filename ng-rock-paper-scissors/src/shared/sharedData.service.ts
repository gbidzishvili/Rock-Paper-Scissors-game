import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SharedDataService {
    score$ = new BehaviorSubject<number>(10);
    advanceModeOn = new BehaviorSubject<boolean>(false);

    increaseScore() {
        this.score$.next(this.score$.value + 1);
        console.log(this.score$);
    }
    decreaseScore() {
        this.score$.next(this.score$.value - 1);
        console.log(this.score$);
    }
    advanceModeToggle() {
        this.advanceModeOn.next(!this.advanceModeOn.value);
        console.log(this.advanceModeOn.value);
    }
}
