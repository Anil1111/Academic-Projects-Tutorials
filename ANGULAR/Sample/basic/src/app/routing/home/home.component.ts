import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FakeAuthService } from '../fake-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private fakeAuthService: FakeAuthService) {}

  ngOnInit(): void {}
  onLoadServers() {
    // complex calculation
    this.router.navigate(['/routing/servers']);
  }
  onLoadServer(id: number) {
    this.router.navigate(['./servers', id, 'edit'], {
      relativeTo: this.route,
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }
  onLogin() {
    this.fakeAuthService.login();
  }
  onLogout() {
    this.fakeAuthService.logout();
  }
}
