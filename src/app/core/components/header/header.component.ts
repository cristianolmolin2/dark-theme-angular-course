import { Component } from '@angular/core';
import { ETheme } from '../../enums/etheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  icon: string = ETheme.ICON_MOON;

  toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = ETheme.ICON_SUN;
    } else {
      this.icon = ETheme.ICON_MOON;
    }
  }

}
