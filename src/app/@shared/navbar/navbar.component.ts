import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private sharedService: SharedService) { }


  showSidebar() {
    this.sharedService.toggleSidebar();
  }


}
