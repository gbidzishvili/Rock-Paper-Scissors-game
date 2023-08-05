import { style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';

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
    modalIsOpen = false;
    toggleModal(event) {
        this.modalIsOpen = !this.modalIsOpen;
    }
}
