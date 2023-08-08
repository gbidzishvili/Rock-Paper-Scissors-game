import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { SharedDataService } from 'src/shared/sharedData.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    modalIsOpen = false;
    advanceModeOn;
    isMinWidth768;
    @Output() closeModalEvent = new EventEmitter();
    constructor(public sharedService: SharedDataService) {}
    ngOnInit() {
        this.sharedService.advanceModeOn.subscribe(
            (v) => (this.advanceModeOn = v)
        );
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
            console.log('this happens', this.isMinWidth768);
        });
    }
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.sharedService.checkWindowWidth();
        this.sharedService.isMinWidth768.subscribe((v) => {
            this.isMinWidth768 = v;
        });
    }
    closeModal() {
        this.closeModalEvent.emit('false');
    }
}
