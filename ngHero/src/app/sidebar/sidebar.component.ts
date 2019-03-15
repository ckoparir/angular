import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})

export class SidebarComponent implements OnInit {

  currentUrl: string;
  constructor(private router: Router) {
    // router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log('NavigationEnd: ', event);
    //     this.currentUrl = router.url;
    //   }
    // });
    router.events.subscribe(() => {
      this.currentUrl = router.url;
    });
  }

  ngOnInit() {
  }
}
