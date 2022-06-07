import { Component, OnInit } from '@angular/core';
import {NavBarService} from "../../share/services/navbar/nav-bar.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private navBarService: NavBarService) { }

  ngOnInit(): void {
  }
  getClasses(): any {
    return {
      'pinned-sidebar': this.navBarService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.navBarService.getSidebarStat().isSidebarToggeled
    };
  }
  toggleSidebar(): void {
    this.navBarService.toggleSidebar();
  }
}
