import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatButtonModule,
    MatSidenavModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  showFiller = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleSidenav() {
    this.drawer.toggle();
  }

}
