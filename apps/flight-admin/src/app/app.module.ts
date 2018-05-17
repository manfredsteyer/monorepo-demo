import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { FlightApiModule } from '@flight-workspace/flight-api';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), FlightApiModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
