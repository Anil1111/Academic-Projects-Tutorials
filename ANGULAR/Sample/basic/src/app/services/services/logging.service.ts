import { Injectable } from '@angular/core';
import { ServicesModule } from '../services.module';

@Injectable({
  providedIn: 'root'
}) // @Injectable decorator is optional as no services injected here
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
