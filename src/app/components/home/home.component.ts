import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollY = 0;
  isMobile = window.innerWidth < 750;
  navigationClass = 'navigation';
  footerHeight = 500;
  buttonPosition: any = 0;
  observers: any[] = [];
  footerObserver:any = null;
  stoppedScrolling = false;
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
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
      '#footerId'
    );
    this.footerHeight = element.offsetTop;

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
      this.elementRef.nativeElement.querySelector(this.isMobile ? '#navResponsiveHome' : '#descNavResponsiveHome'),
      this.elementRef.nativeElement.querySelector(this.isMobile ? '#navResponsiveEvolutions' : '#descNavResponsiveEvolutions'),
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
              if (!this.stoppedScrolling) {
                this.buttonPosition = i;
              }
            }
          });
        })
      );
      this.observers[i].observe(element);
    });
    const elementFooter = this.elementRef.nativeElement.querySelector('#footerId')
    this.footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.navigationClass = 'navigation navigation-fixed'
        }else{
          this.navigationClass = 'navigation'

        }
      });
    });
    this.footerObserver.observe(elementFooter);
  }

  getHeightElement(elementId = '') {
    const element = this.elementRef.nativeElement.querySelector(elementId);
    return element.offsetTop;
  }

  getNavigationClass(){
    return this.navigationClass;
  }

  setScroll(index = 0) {
    if (index == 1) {
      return window.scrollTo({
        top: this.getHeightElement('#navEvolutions') + 20,
        behavior: 'smooth',
      });
    }
    if (index == 2) {
      return window.scrollTo({
        top: this.getHeightElement('#navInformations') + 30,
        behavior: 'smooth',
      });
    }
    if (index == 3) {
      return window.scrollTo({
        top: this.getHeightElement('#navProtocol'),
        behavior: 'smooth',
      });
    }
    if (index == 4) {
      return window.scrollTo({
        top: this.getHeightElement('#navPlans'),
        behavior: 'smooth',
      });
    }
    if (index == 5) {
      return window.scrollTo({
        top: this.getHeightElement('#navAboutMe'),
        behavior: 'smooth',
      });
    }
    if (index == 6) {
      return window.scrollTo({
        top: this.getHeightElement('#navFaq'),
        behavior: 'smooth',
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
