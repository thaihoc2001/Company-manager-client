import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../services/navbar/nav-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navBarService: NavBarService) { }
  isCollapsed = true;

  ngOnInit(): void {
  }

  toggleSidebarPin(): void {
    this.navBarService.toggleSidebarPin();
  }
  toggleSidebar(): void {
    this.navBarService.toggleSidebar();
  }

}
