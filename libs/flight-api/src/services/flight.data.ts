import { Flight } from '@flight-workspace/flight-api';

export const flights: Flight[] = [
  { id: 1, from: 'Vienna', to: 'Berlin', date: new Date().toISOString(), delayed: false },
  { id: 2, from: 'Vienna', to: 'Zurich', date: new Date().toISOString(), delayed: false },
  { id: 3, from: 'Vienna', to: 'Graz', date: new Date().toISOString(), delayed: false }
];
