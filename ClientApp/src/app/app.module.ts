import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GokuldhamComponent } from './gokuldham/gokuldham.component';
import { MahasangramComponent } from './mahasangram/mahasangram.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuldhamComponent,
    MahasangramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
