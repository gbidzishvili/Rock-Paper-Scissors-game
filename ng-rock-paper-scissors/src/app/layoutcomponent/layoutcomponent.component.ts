import { style, transition, trigger, animate } from '@angular/animations';
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
                animate('300ms', style({ opacity: 1 })),
            ]),
        ]),
    ],
})
export class LayoutcomponentComponent {
    advanceModeOn;
    modalIsOpen = false;
    constructor(public sharedService: SharedDataService) {}
    ngOnInit() {
        this.sharedService.advanceModeOn.subscribe(
            (v) => (this.advanceModeOn = v)
        );
    }
    toggleModal(event) {
        this.modalIsOpen = !this.modalIsOpen;
    }
}
