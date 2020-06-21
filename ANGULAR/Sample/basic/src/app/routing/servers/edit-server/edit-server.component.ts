import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false; // provides information whether the updateServer button was clicked or not for configuring canDeactivate guard

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // constants to use in the subscribe mthod
    const idParam = 'id';
    const allowEditParam = 'allowEdit';
    // outputting the params value
    console.log('Query params is ' + this.route.snapshot.queryParams[allowEditParam]);
    console.log('Fragment is ' + this.route.snapshot.fragment);

    // setting default server based on itinital route params
    const id = +this.route.snapshot.params[idParam];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    // subscribing to changes to Route/Query/Fragment params
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params[idParam]);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams[allowEditParam] === '1' ? true : false;
      console.log(this.allowEdit);
    });
    this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(
      ['../'],
      { relativeTo: this.route}
    );
  }

  onReloadWithParams() {
    this.router.navigate(['/routing/servers', 2, 'edit'], {
      queryParams: { allowEdit: 2 },
      fragment: 'moreLoading',
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name && this.serverStatus !== this.server.status) || !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    return true;
  }

}
