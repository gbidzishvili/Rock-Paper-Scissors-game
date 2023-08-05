import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    modalIsOpen = false;
    @Output() closeModalEvent = new EventEmitter();
    closeModal() {
        this.closeModalEvent.emit('false');
    }
}
