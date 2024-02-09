import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollY = 0; // Ajuste a altura limite conforme necessário
  presentationHeight = 743;
  buttonPosition: any = 0;
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    // const isMobile = window.innerWidth < 750;
    // const navPositions: any = {
    //   0: 0,
    //   1: this.getHeightElement('#navEvolutions') - (isMobile ? 90 : 0),
    //   2: this.getHeightElement('#navInformations') - (isMobile ? 135 : 145),
    //   3: this.getHeightElement('#navProtocol') - (isMobile ? 110 : 120),
    //   4: this.getHeightElement('#navPlans') - (isMobile ? 105 : 120),
    //   5: this.getHeightElement('#navAboutMe') - (isMobile ? 63 : 25),
    //   6: this.getHeightElement('#navFaq') - (isMobile ? 70 : 85),
    // };

    this.scrollY = window.scrollY;
    // let indexButton: any = 0;
    // this.scrollY <
    // this.getHeightElement('#navInformations') - (isMobile ? 135 : 145)
    //   ? this.buttonPosition = 2
    //   : 0;
  }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector(
      '#heightPresentation'
    );
    this.presentationHeight = element.offsetTop - 10;
  }

  getNavigationClass() {
    if (this.scrollY >= this.presentationHeight) {
      return 'navigation-fixed';
    }
    return 'navigation';
  }

  getHeightElement(elementId = '') {
    const element = this.elementRef.nativeElement.querySelector(elementId);
    return element.offsetTop;
  }
  setScroll(index = 0) {
    const isMobile = window.innerWidth < 750;
    if (index == 1) {
      return window.scrollTo({
        top: this.getHeightElement('#navEvolutions') - (isMobile ? 90 : 0),
        behavior: 'smooth',
      });
    }
    if (index == 2) {
      return window.scrollTo({
        top: this.getHeightElement('#navInformations') - (isMobile ? 135 : 145),
        behavior: 'smooth',
      });
    }
    if (index == 3) {
      return window.scrollTo({
        top: this.getHeightElement('#navProtocol') - (isMobile ? 110 : 120),
        behavior: 'smooth',
      });
    }
    if (index == 4) {
      return window.scrollTo({
        top: this.getHeightElement('#navPlans') - (isMobile ? 105 : 120),
        behavior: 'smooth',
      });
    }
    if (index == 5) {
      return window.scrollTo({
        top: this.getHeightElement('#navAboutMe') - (isMobile ? 63 : 25),
        behavior: 'smooth',
      });
    }
    if (index == 6) {
      return window.scrollTo({
        top: this.getHeightElement('#navFaq') - (isMobile ? 70 : 85),
        behavior: 'smooth',
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
