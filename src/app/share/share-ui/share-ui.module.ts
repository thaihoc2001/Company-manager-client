import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import {CollapseModule} from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [NotFoundComponent, SidebarMenuComponent, NavbarComponent, FooterComponent, BreadcrumbComponent],
  exports: [NotFoundComponent, SidebarMenuComponent, NavbarComponent, FooterComponent, BreadcrumbComponent],
    imports: [
        CommonModule,
        RouterModule,
        CollapseModule
    ]
})
export class ShareUiModule { }
