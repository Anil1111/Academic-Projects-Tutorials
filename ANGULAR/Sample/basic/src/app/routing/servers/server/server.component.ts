import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // commenting the below as we use the ServerResolverService in *-routing.module.ts to load asynchronously the server data
    // const idParam = 'id';
    // const id = +this.route.snapshot.params[idParam];
    // this.server = this.serversService.getServer(id); // getting the server based on the id passed as route param

    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params[idParam]);
    // });

    // 'server' will contain the data loaded by the resolver form the *-routing.module.ts and must match the name mentioned there
    const serverData = 'server';
    this.route.data.subscribe((data: Data) => {
      this.server = data[serverData];
    });
  }

  onEdit() {
    this.router.navigate(
      ['./edit'],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve'
        // use the 'preserve' id you wish to preserve the original query params
        // use the 'merge' if you wish to merge by adding new queryparams to the existing ones otherwise it will be overwritten
      }
    );
  }
}
