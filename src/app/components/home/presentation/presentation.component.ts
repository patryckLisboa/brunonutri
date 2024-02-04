import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {

  playVideo(
    buttonElement: HTMLElement,
    buttonElementContainer: HTMLElement,
    videoElement: HTMLVideoElement
  ) {
    buttonElement.classList.add('clicked-elastic');
    setTimeout(() => {
      buttonElement.classList.remove('clicked-elastic');
      buttonElementContainer.classList.add('end');
      videoElement.play();
    }, 500);
  }

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
