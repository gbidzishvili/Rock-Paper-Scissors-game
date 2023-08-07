import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/shared/sharedData.service';
// import { S } from 'rxjs';
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
            console.log('score is ', this.score);
        });
        this.sharedService.advanceModeOn.subscribe(
            (v) => (this.advanceModeOn = v)
        );
    }
}
