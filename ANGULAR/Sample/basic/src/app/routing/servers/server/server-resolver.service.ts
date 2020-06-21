import { Injectable } from '@angular/core';
import { Server } from './server.model';
import { ActivatedRoute, RouterStateSnapshot, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server>{

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    const idParam = 'id';
    return this.serversService.getServer(+route.params[idParam]);
    // will perform loading of data will be performed before actual loading of the component
    // can be used to return an observable/promise from a http request
  }
}
