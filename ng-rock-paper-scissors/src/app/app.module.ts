import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        TitleBarComponent,
        PlaygroundComponent,
        GameRulesComponent,
        LayoutcomponentComponent,
        ModalComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
