import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';


const url = environment.wsUrl ;

@Injectable({
  providedIn: 'root'
})

export class SharedService {
    private showSidebarSubject = new BehaviorSubject<boolean>(false);

    showSidebar$ = this.showSidebarSubject.asObservable();

    toggleSidebar() {
        this.showSidebarSubject.next(!this.showSidebarSubject.value);
    }

    hideSidebar() {
        this.showSidebarSubject.next(false);
    }

    showSidebar() {
        this.showSidebarSubject.next(true);
    }
  
}
