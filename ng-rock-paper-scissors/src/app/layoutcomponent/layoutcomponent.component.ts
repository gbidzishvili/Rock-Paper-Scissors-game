import {
    style,
    transition,
    trigger,
    animate,
    state,
} from '@angular/animations';
import { Component } from '@angular/core';
import { SharedDataService } from 'src/shared/sharedData.service';

@Component({
    selector: 'app-layoutcomponent',
    templateUrl: './layoutcomponent.component.html',
    styleUrls: ['./layoutcomponent.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('100ms', style({ opacity: 1 })),
            ]),
        ]),
        trigger('slideInOut', [
            state('visible', style({ transform: 'translateX(0)' })),
            state('hidden', style({ transform: 'translateX(-100%)' })),
            transition('visible <=> hidden', animate('0.5s ease-in-out')),
        ]),
    ],
})
export class LayoutcomponentComponent {
    advanceModeOn;
    modalIsOpen = false;
    isMinWidth768;
    constructor(public sharedService: SharedDataService) {}
    ngOnInit() {
        this.sharedService.advanceModeOn.subscribe(
            (v) => (this.advanceModeOn = v)
        );
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
        });
    }
    toggleModal(event) {
        this.modalIsOpen = !this.modalIsOpen;
    }
}
