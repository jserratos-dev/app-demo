import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {

  showSidebar = true;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.showSidebar$.subscribe(show => {
      this.showSidebar = show;
    });
  }

}
