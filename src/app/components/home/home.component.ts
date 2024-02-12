import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isMobile = window.innerWidth < 750;
  navigationClass = 'navigation';
  buttonPosition: any = 0;
  navObservers: any[] = [];
  topObserver: any = null;
  footerObserver: any = null;
  openingObserver: any = null;
  openingRightObserver: any = null;
  stoppedScrolling = false;
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerHeight < 750;
  }

  ngAfterViewInit() {
    this.initReativeNavigation();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 500);
  }

  ngOnDestroy(): void {
    this.disconnectObservers();
  }

  disconnectObservers(onlyHiddens = false) {
    if (onlyHiddens) {
      if (this.openingObserver) {
        this.openingObserver.disconnect();
        this.openingObserver = null;
      }
      if (this.openingRightObserver) {
        this.openingRightObserver.disconnect();
        this.openingRightObserver = null;
      }
      return;
    }
    this.navObservers.forEach((element) => {
      if (element) {
        console.log('teste');
        element.disconnect();
      }
    });
    if (this.topObserver) {
      this.topObserver.disconnect();
    }
    if (this.footerObserver) {
      this.footerObserver.disconnect();
    }
  }
  activatedScroll(value = false) {
    this.stoppedScrolling = value;
  }

  initReativeNavigation() {
    this.initNavigationOptions();
    this.initNavigationTop();
    this.initNavigationBottom();
    this.initHiddenAnimations();
  }

  initHiddenAnimations() {
    this.openingObserver = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: [0, 1] }
    );
    this.openingRightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-right');
        } else {
          entry.target.classList.remove('show-right');
        }
      });
    });
    const elements = this.elementRef.nativeElement.querySelectorAll('.hidden');
    const elementsRight =
      this.elementRef.nativeElement.querySelectorAll('.hidden-right');

    elements.forEach((element: any) => {
      this.openingObserver.observe(element);
    });
    elementsRight.forEach((element: any) => {
      this.openingRightObserver.observe(element);
    });
  }

  initNavigationBottom() {
    const elementFooter =
      this.elementRef.nativeElement.querySelector('#footerId');
    this.footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const newClass = entry.isIntersecting
          ? 'navigation appear navigation-footer-fixed'
          : 'navigation appear';
        if (this.navigationClass !== newClass) {
          this.navigationClass = newClass;
        }
      });
    });
    this.footerObserver.observe(elementFooter);
  }

  initNavigationTop() {
    const elementTop = this.elementRef.nativeElement.querySelector(
      '#descNavResponsiveHome'
    );
    this.topObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const newClass = entry.isIntersecting
          ? 'navigation'
          : 'navigation navigation-fixed';
        if (this.navigationClass !== newClass) {
          this.navigationClass = newClass;
          if (!entry.isIntersecting) {
            setTimeout(() => {
              if (this.navigationClass === 'navigation navigation-fixed') {
                this.navigationClass = 'navigation appear';
              }
            });
          }
        }
      });
    });
    this.topObserver.observe(elementTop);
  }

  initNavigationOptions() {
    const elementsList = [
      this.elementRef.nativeElement.querySelector(
        this.isMobile ? '#navResponsiveHome' : '#descNavResponsiveHome'
      ),
      this.elementRef.nativeElement.querySelector(
        this.isMobile
          ? '#navResponsiveEvolutions'
          : '#descNavResponsiveEvolutions'
      ),
      this.elementRef.nativeElement.querySelector('#navResponsiveInformations'),
      this.elementRef.nativeElement.querySelector('#navResponsiveProtocol'),
      this.elementRef.nativeElement.querySelector('#navResponsivePlans'),
      this.elementRef.nativeElement.querySelector('#navResponsiveAboutMe'),
      this.elementRef.nativeElement.querySelector('#navResponsiveFaq'),
    ];
    elementsList.forEach((element, i) => {
      this.navObservers.push(
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
      this.navObservers[i].observe(element);
    });
  }

  getHeightElement(elementId = '') {
    const element = this.elementRef.nativeElement.querySelector(elementId);
    return element.offsetTop;
  }

  getNavigationClass() {
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
