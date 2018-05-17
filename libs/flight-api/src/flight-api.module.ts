import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlightService } from './services/flight.service';

@NgModule({
  imports: [CommonModule]
})
export class FlightApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlightApiModule,
      providers: [FlightService]
    };
  }
}
