import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FileComponent } from './file/file.component';
import { TextService } from './file-text-service/file-text-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlPanelComponent,
    FileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
