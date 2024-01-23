import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  constructor() {}

  elasticEffect(element: HTMLElement) {
    element.classList.add('clicked-elastic');
    setTimeout(() => {
      element.classList.remove('clicked-elastic');
    }, 1000);
  }

  openWhatsApp(openWhatsApp: HTMLElement) {
    this.elasticEffect(openWhatsApp);
    const whatsAppUrl =
      'https://api.whatsapp.com/send?phone=5562984042418&text=Olá,%20gostaria%20de%20contratar%20o%20plano%20mensal';

    setTimeout(() => {
      window.open(whatsAppUrl, '_blank');
    }, 500);
  }
}
