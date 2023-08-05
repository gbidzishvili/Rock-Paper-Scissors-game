import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SharedDataService {
    score$ = new BehaviorSubject<number>(10);

    increaseScore() {
        this.score$.next(this.score$.value + 1);
        console.log(this.score$);
    }
    decreaseScore() {
        this.score$.next(this.score$.value - 1);
        console.log(this.score$);
    }
}
