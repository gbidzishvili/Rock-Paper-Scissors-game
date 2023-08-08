import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, take, timer } from 'rxjs';
import {
    dimensions,
    // triangleDimensions,
    rules,
    // pentagonDimensions,
} from 'src/shared/shared';
import { SharedDataService } from 'src/shared/sharedData.service';
@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
    started = false;
    advanceModeOn = new BehaviorSubject(false);
    compChoosenSign = 'scissors';
    compChoosenSignDim;
    mySignRulesObj;
    choosen_width;
    choosen_height;
    choosen_fill;
    choosen_d;
    triangle_width;
    triangle_height;
    triangle_fill;
    triangle_d;
    sign;
    arr = dimensions.slice(0, 3);
    // pentDimensions = pentagonDimensions;
    showComp = false;
    outcome;
    timerId;
    isMinWidth768: boolean;
    bounceStates = ['initial', 'initial', 'initial'];
    currentIndex = 0;
    constructor(public sharedService: SharedDataService) {}

    ngOnInit() {
        this.advanceModeOn = this.sharedService.advanceModeOn;
        this.advanceModeOn.subscribe((v) => {
            if (v === true) {
                this.started = false;
                clearInterval(this.timerId);
            }
        });
        this.sharedService.checkWindowWidth();
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.sharedService.checkWindowWidth();
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
        });
    }
    chooseSign(num) {
        console.log('num is: ' + num);
        this.started = !this.started;
        this.choosen_width = dimensions[num]['dim'][0];
        this.choosen_height = dimensions[num]['dim'][1];
        this.choosen_d = dimensions[num]['dim'][2];
        this.sign = dimensions[num]['value'];
        this.mySignRulesObj = rules[num];
        this.compSign();
    }
    compSign() {
        const rand_number = Math.floor(Math.random() * 3);
        this.compChoosenSign = this.arr[rand_number]['value'];
        this.compChoosenSignDim = this.arr[rand_number]['dim'];
        this.timerId = setTimeout(() => {
            this.showComp = true;
            if (this.mySignRulesObj['beats'].includes(this.compChoosenSign)) {
                this.outcome = 'YOU WIN';
                this.sharedService.increaseScore();
            } else if (this.mySignRulesObj.value === this.compChoosenSign) {
                this.outcome = 'DRAW';
            } else {
                this.outcome = 'YOU LOSE';
                this.sharedService.decreaseScore();
            }
        }, 2000);
    }
    restart() {
        this.started = !this.started;
        this.showComp = !this.showComp;
        clearTimeout(this.timerId);
    }
}
