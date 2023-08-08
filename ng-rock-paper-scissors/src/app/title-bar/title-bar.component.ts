import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/shared/sharedData.service';
@Component({
    selector: 'app-title-bar',
    templateUrl: './title-bar.component.html',
    styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
    score: number;
    advanceModeOn = false;
    constructor(public sharedService: SharedDataService) {}
    ngOnInit() {
        this.sharedService.score$.subscribe((value) => {
            this.score = value;
        });
        this.sharedService.advanceModeOn.subscribe(
            (v) => (this.advanceModeOn = v)
        );
    }
}
