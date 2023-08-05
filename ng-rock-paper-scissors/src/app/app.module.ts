import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';

@NgModule({
    declarations: [
        AppComponent,
        TitleBarComponent,
        PlaygroundComponent,
        GameRulesComponent,
        LayoutcomponentComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
