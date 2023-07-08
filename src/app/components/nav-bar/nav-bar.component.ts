import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  //replace modeSwitch functionality once services have been injected & all content has been written
  //make method DRY
  modeSwitch(): void {
    const navBarText = document.getElementById('LogoText');
    const navBar = document.getElementById('navBar');
    const logoButton = document.getElementById('LogoButton');
    const contentDiv = document.getElementById('contentDiv');

    const darkContent = Array.from(
      document.getElementsByClassName('darkContent')
    );
    const darkLinks = Array.from(document.getElementsByClassName('darkLinks'));
    const darkExternalLinks = Array.from(
      document.getElementsByClassName('darkExternalLinks')
    );

    const lightContent = Array.from(
      document.getElementsByClassName('lightContent')
    );
    const lightLinks = Array.from(
      document.getElementsByClassName('lightLinks')
    );
    const lightExternalLinks = Array.from(
      document.getElementsByClassName('lightExternalLinks')
    );

    if (navBarText.className === 'DarkLogoText') {
      navBarText.className = 'LightLogoText';
      navBar.className = 'LightNavBar';
      logoButton.className = 'lightButton';
      contentDiv.className = 'contentDivLight';

      darkContent.forEach((element) => {
        element.className = 'lightContent';
      });

      darkLinks.forEach((element) => (element.className = 'lightLinks'));
      darkExternalLinks.forEach(
        (element) => (element.className = 'lightExternalLinks')
      );
    } else {
      navBarText.className = 'DarkLogoText';
      navBar.className = 'DarkNavBar';
      logoButton.className = 'darkButton';
      contentDiv.className = 'contentDivDark';

      lightContent.forEach((element) => {
        element.className = 'darkContent';
      });

      lightLinks.forEach((element) => (element.className = 'darkLinks'));
      lightExternalLinks.forEach(
        (element) => (element.className = 'darkExternalLinks')
      );
    }
  }

  newTab(): void {
    window.open('https://github.com/MetaBrian/AngularSNAP', '_blank');
  }
}
