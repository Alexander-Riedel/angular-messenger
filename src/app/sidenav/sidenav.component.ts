import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidenav',
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  readonly panelOpenState = signal(false);

  panelOpenStates = {
    channels: signal(true),
    directMessages: signal(true)
  };

}
