import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollY = 0; // Ajuste a altura limite conforme necessário

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollY = window.scrollY;
  }

  getNavigationClass() {
    if (this.scrollY >= 743) {
      return 'navigation-fixed';
    }
    return 'navigation';
  }

  setScroll(index = 0) {
    // if (index) {
    //   return window.scrollTo({ top: window.innerHeight * index, behavior: 'smooth' });
    // }
    // if (index === 3) {
    //   return window.scrollTo({ top: window.innerHeight * (index + 2), behavior: 'smooth' });
    // }

    return window.scrollTo({ top: window.innerHeight * index, behavior: 'smooth' });
  }
}
