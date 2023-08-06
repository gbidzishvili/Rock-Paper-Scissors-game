import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvancedPlaygroundComponent } from './advanced-playground/advanced-playground.component';

@NgModule({
    declarations: [
        AppComponent,
        TitleBarComponent,
        PlaygroundComponent,
        FooterComponent,
        LayoutcomponentComponent,
        ModalComponent,
        AdvancedPlaygroundComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
