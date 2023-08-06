import { Component, EventEmitter, Output } from '@angular/core';
import { SharedDataService } from 'src/shared/sharedData.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    modalIsOpen = false;
    advanceModeOn;
    @Output() closeModalEvent = new EventEmitter();
    constructor(public sharedService: SharedDataService) {}
    ngOnInit() {
        this.sharedService.advanceModeOn.subscribe(
            (v) => (this.advanceModeOn = v)
        );
        console.log('ehheehh', this.advanceModeOn);
    }

    closeModal() {
        this.closeModalEvent.emit('false');
    }
}
