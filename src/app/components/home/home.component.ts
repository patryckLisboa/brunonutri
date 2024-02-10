import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollY = 0;
  presentationHeight = 743;
  buttonPosition: any = 0;
  observers: any[] = [];
  stoppedScrolling = false;
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
  }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector(
      '#heightPresentation'
    );
    this.presentationHeight = element.offsetTop - 10;

    this.initReativeSelection();
  }

  ngOnDestroy(): void {
    this.observers.forEach((element) => element.disconnect());
  }

  activatedScroll(value = false){
    this.stoppedScrolling = value;
  }

  initReativeSelection() {
    const elementsList = [
      this.elementRef.nativeElement.querySelector('#navResponsiveHome'),
      this.elementRef.nativeElement.querySelector('#navResponsiveEvolutions'),
      this.elementRef.nativeElement.querySelector('#navResponsiveInformations'),
      this.elementRef.nativeElement.querySelector('#navResponsiveProtocol'),
      this.elementRef.nativeElement.querySelector('#navResponsivePlans'),
      this.elementRef.nativeElement.querySelector('#navResponsiveAboutMe'),
      this.elementRef.nativeElement.querySelector('#navResponsiveFaq'),
    ];
    elementsList.forEach((element, i) => {
      this.observers.push(
        new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(entry, i, this.stoppedScrolling);
              if (!this.stoppedScrolling) {
                this.buttonPosition = i;
              }
            }
          });
        })
      );
      this.observers[i].observe(element);
    });
  }

  getNavigationClass() {
    if (this.scrollY >= this.presentationHeight) {
      return 'navigation navigation-fixed';
    }
    return 'navigation';
  }

  // elasticEffect(element: HTMLElement) {
  //   element.classList.add('clicked-elastic');
  //   setTimeout(() => {
  //     element.classList.remove('clicked-elastic');
  //   }, 1000);
  // }

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
        top: this.getHeightElement('#navAboutMe') - (isMobile ? 108 : 25),
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
