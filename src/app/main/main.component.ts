import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-main',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    SidenavComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
