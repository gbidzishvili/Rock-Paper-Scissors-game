import { Component, EventEmitter, Output } from '@angular/core';
import { SharedDataService } from 'src/shared/sharedData.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    @Output() openModalEvent = new EventEmitter<string>();
    advanceModeOn = false;
    constructor(public sharedService: SharedDataService) {}
    openModal() {
        this.openModalEvent.emit('true');
    }
    advanceModeToggle() {
        this.sharedService.advanceModeToggle();
        this.advanceModeOn = !this.advanceModeOn;
    }
}
