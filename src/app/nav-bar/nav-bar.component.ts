import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  modeSwitch(): void {
    const navBarText = document.getElementById('LogoText');
    const navBar = document.getElementById('navBar');
    const logoButton = document.getElementById('LogoButton');
    const contentDiv = document.getElementById('contentDiv');

    const darkContent = document.getElementsByClassName('darkContent');
    const darkLinks = document.getElementsByClassName('darkLinks');
    const darkExternalLinks =
      document.getElementsByClassName('darkExternalLinks');

      const lightContent = document.getElementsByClassName('lightContent');
      const lightLinks = document.getElementsByClassName('lightLinks');
      const lightExternalLinks =
        document.getElementsByClassName('lightExternalLinks');

    if (navBarText.className === 'DarkLogoText') {
      navBarText.className = 'LightLogoText';
      navBar.className = 'LightNavBar';
      logoButton.className = 'lightButton';
      contentDiv.className = 'contentDivLight';

      for (let i = 0; i < darkContent.length; i++) {
        darkContent[i].className = 'lightContent';
      }

      for (let j = 0; j < darkLinks.length; j++) {
        darkLinks[j].className = 'lightLinks';
      }

      for (let k = 0; k < darkExternalLinks.length; k++) {
        darkExternalLinks[k].className = 'lightExternalLinks';
      }
    } else {
      navBarText.className = 'DarkLogoText';
      navBar.className = 'DarkNavBar';
      logoButton.className = 'darkButton';
      contentDiv.className = 'contentDivDark';

      for (let i = 0; i < lightContent.length; i++) {
        lightContent[i].className = 'darkContent';
      }

      for (let j = 0; j < lightLinks.length; j++) {
        lightLinks[j].className = 'darkLinks';
      }

      for (let k = 0; k < lightExternalLinks.length; k++) {
        lightExternalLinks[k].className = 'darkExternalLinks';
      }

    }
  }

  consoleLogger(): void {
    console.log('clicked');
  }

  newTab(): void {
    window.open('https://github.com/MetaBrian/AngularSNAP', '_blank');
  }
}
