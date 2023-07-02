import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  modeSwitch() {
    const navBarText = document.getElementById('LogoText');
    const navBar = document.getElementById('navBar')
  
    if (navBarText.className === 'DarkLogoText') {
      navBarText.className = 'LightLogoText';
      navBar.className='LightNavBar'

    } else {
      navBarText.className = 'DarkLogoText';
      navBar.className='DarkNavBar'
    }
  }

  newTab(){
    window.open('https://github.com/MetaBrian/AngularSNAP','_blank')
  }
}
