import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  openInstagram(openWhatsApp: HTMLElement) {
    this.elasticEffect(openWhatsApp);
    const myInstagramUrl = `https://www.instagram.com/pat_lisdz/`;

    setTimeout(() => {
      window.open(myInstagramUrl, '_blank');
    }, 500);
  }

  elasticEffect(element: HTMLElement) {
    element.classList.add('clicked-elastic');
    setTimeout(() => {
      element.classList.remove('clicked-elastic');
    }, 1000);
  }
}
