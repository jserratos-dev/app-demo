import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-navbar></app-navbar>
    <div class="page-body-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-panel">
        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  `
})
export class PagesComponent {}
