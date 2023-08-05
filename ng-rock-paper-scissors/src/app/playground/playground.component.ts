import { Component } from '@angular/core';
import { dimensions } from 'src/shared/shared';
import { rules } from 'src/shared/shared';
import { SharedDataService } from 'src/shared/sharedData.service';
@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
    clicked = false;
    compchoosen;
    compchoosenDim;
    choosen_width;
    choosen_height;
    choosen_fill;
    choosen_d;
    class = 'rock';
    arr = dimensions;
    showComp = false;
    outcome;
    timerId;
    constructor(public sharedService: SharedDataService) {}
    chooseGesture(num) {
        console.log('num is: ' + num);
        this.clicked = !this.clicked;
        this.choosen_width = dimensions[num]['dim'][0];
        this.choosen_height = dimensions[num]['dim'][1];
        this.choosen_d = dimensions[num]['dim'][2];
        this.class = dimensions[num]['value'];
        this.compGesture();
        const mine = rules[num];
        console.log('?????', mine.value, this.compchoosen);
        if (mine['beats'].includes(this.compchoosen)) {
            console.log('You win');
            this.outcome = 'YOU WIN';
            this.sharedService.increaseScore();
        } else if (mine.value === this.compchoosen) {
            console.log('Draw');
            this.outcome = 'DRAW';
        } else {
            console.log('You lose');
            this.outcome = 'YOU LOSE';
            this.sharedService.decreaseScore();
        }
    }
    compGesture() {
        const rand_number = Math.floor(Math.random() * 3);
        this.compchoosen = this.arr[rand_number]['value'];
        this.compchoosenDim = this.arr[rand_number]['dim'];
        this.timerId = setTimeout(() => {
            this.showComp = true;
        }, 2000);
    }
    restart() {
        this.clicked = !this.clicked;
        this.showComp = false;
        clearTimeout(this.timerId);
    }
}
