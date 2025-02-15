import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { MainComponent } from "../main/main.component";
import { ThreadComponent } from "../thread/thread.component";

@Component({
  selector: 'app-messenger',
  imports: [HeaderComponent, SidenavComponent, MainComponent, ThreadComponent],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {

}
