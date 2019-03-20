import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  // templateUrl: './about.component.html',
  // TODO: Example for inline template for the component
  template: `
    <p>This is inline template paragraph within component</p>
    <app-footer></app-footer>
  `,
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
