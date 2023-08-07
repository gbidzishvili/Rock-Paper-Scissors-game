import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SharedDataService {
    score$ = new BehaviorSubject<number>(10);
    advanceModeOn = new BehaviorSubject<boolean>(false);
    isMinWidth768 = new BehaviorSubject<boolean>(window.innerWidth >= 768);

    checkWindowWidth() {
        const isMinWidth = window.innerWidth >= 768;
        this.isMinWidth768.next(isMinWidth); // Emit the initial value
    }

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
