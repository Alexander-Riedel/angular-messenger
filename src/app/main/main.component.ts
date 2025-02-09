import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  imports: [
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  showFiller = false;

}
