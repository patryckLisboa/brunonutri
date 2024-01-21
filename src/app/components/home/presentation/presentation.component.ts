import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  // @Input() indexButton = 0;

  constructor() {}

  elasticEffect(element: HTMLElement) {
    element.classList.add('clicked-elastic');
    setTimeout(() => {
      element.classList.remove('clicked-elastic');
    }, 1000);
  }

  openWhatsApp(openWhatsApp: HTMLElement) {
    console.log("tese")

    this.elasticEffect(openWhatsApp);
    const whatsAppUrl =
      'https://api.whatsapp.com/send?phone=5562984042418&text=Olá,%20gostaria%20de%20contratar%20o%20plano%20mensal';

    setTimeout(() => {
      window.open(whatsAppUrl, '_blank');
    }, 500);
  }

  // getNavBarStyle(side: string) {
  //   const initNumber = 115;
  //   const widthButton = 70;
  //   if (side == 'L') {
  //     if (!this.indexButton) {
  //       return {
  //         backgroundColor: 'black',
  //         borderTopRightRadius: '100px',
  //         height: '30px',
  //         width: '100%',
  //         marginLeft: `-${initNumber}px`,
  //       };
  //     }
  //     const number = initNumber - widthButton * this.indexButton;
  //     // console.log(`-${number}px`.replaceAll("--","+"));
  //     if (this.indexButton < 2)
  //       return {
  //         backgroundColor: 'black',
  //         borderTopRightRadius: '100px',
  //         height: '30px',
  //         width: '100%',
  //         marginLeft: `-${number}px`.replaceAll('--', '+'),
  //       };
  //     return {
  //       backgroundColor: 'black',
  //       borderTopRightRadius: '50px',
  //       height: '30px',
  //       width: '100%',
  //       paddingRight: `-${number}px`.replaceAll('--', '+'),
  //     };
  //   }
  //   if (side == 'R') {
  //     if (!this.indexButton) {
  //       return {
  //         backgroundColor: 'black',
  //         borderTopLeftRadius: '100px',
  //         height: '50px',
  //         width: '100%',
  //         paddingLeft: `${initNumber}px`,
  //       };
  //     }
  //     const number = initNumber - widthButton * this.indexButton;
  //     console.log(`${number}px`);
  //     if (this.indexButton < 2)
  //       return {
  //         backgroundColor: 'black',
  //         borderTopLeftRadius: '100px',
  //         height: '50px',
  //         width: '100%',
  //         paddingLeft: `${number}px`,
  //       };

  //     return {
  //       backgroundColor: 'black',
  //       borderTopLeftRadius: '100px',
  //       height: '50px',
  //       width: '100%',
  //       marginRight: `${number}px`,
  //     };
  //   }

  //   // se index 0 : left - margin left -115px  && right - padding left +115px
  //   return null;
  // }
}
