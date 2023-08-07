import { Component, HostListener } from '@angular/core';
import { dimensions, pentagonDimensions, rules } from 'src/shared/shared';
import { SharedDataService } from 'src/shared/sharedData.service';

@Component({
    selector: 'app-advanced-playground',
    templateUrl: './advanced-playground.component.html',
    styleUrls: ['./advanced-playground.component.scss'],
})
export class AdvancedPlaygroundComponent {
    arr = dimensions;
    started: boolean;
    choosen_width: string;
    choosen_height: string;
    choosen_d: string;
    sign: string;
    mySignRulesObj: any;
    compChoosenSign: string;
    compChoosenSignDim: string[];
    timerId;
    showComp: boolean;
    outcome: string;
    isMinWidth768;
    pentdimesnios = pentagonDimensions;
    pent_d;
    constructor(public sharedService: SharedDataService) {}
    ngOnInit() {
        this.sharedService.checkWindowWidth();
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
        });
        this.assignPentagonDimensions();
    }
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.sharedService.checkWindowWidth();
        this.assignPentagonDimensions();
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
        });
    }
    assignPentagonDimensions() {
        if (!this.isMinWidth768) {
            this.pent_d = this.pentdimesnios[0]['dim'];
            console.log(this.pent_d);
        } else {
            this.pent_d = this.pentdimesnios[1]['dim'];
            console.log(this.pent_d);
        }
    }
    chooseSign(num) {
        this.started = !this.started;
        this.choosen_width = dimensions[num]['dim'][0];
        this.choosen_height = dimensions[num]['dim'][1];
        this.choosen_d = dimensions[num]['dim'][2];
        this.sign = dimensions[num]['value'];
        this.mySignRulesObj = rules[num];
        this.compSign();
    }
    compSign() {
        const rand_number = Math.floor(Math.random() * 5);
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
