import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ThreadComponent } from "../thread/thread.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-messenger',
  imports: [HeaderComponent, SidenavComponent, ThreadComponent, MatGridListModule, MainComponent],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {

}
