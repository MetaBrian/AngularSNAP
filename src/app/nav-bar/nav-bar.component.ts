import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  modeSwitch() {
    const navBarText = document.getElementById('LogoText');
  
    if (navBarText.className === 'LightLogoText') {
      navBarText.className = 'DarkLogoText';
    } else {
      navBarText.className = 'LightLogoText';
    }
  }

  newTab(){
    window.open('https://github.com/MetaBrian/AngularSNAP','_blank')
  }
}
