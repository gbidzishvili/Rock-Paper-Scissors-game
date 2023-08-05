import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-rules',
    templateUrl: './game-rules.component.html',
    styleUrls: ['./game-rules.component.scss'],
})
export class GameRulesComponent {
    @Output() openModalEvent = new EventEmitter<string>();

    openModal() {
        this.openModalEvent.emit('true');
    }
}
