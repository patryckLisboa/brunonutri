import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  altura = 0; // Ajuste a altura limite conforme necessário

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.altura = window.scrollY || document.documentElement.scrollTop;
  }

  getNavigationClass() {
    if (scrollY >= 743) {
      return {
        position: 'absolute',
        width: '100%',
        transition: "none",
        marginTop: `${this.altura - 25}px`,
        backgroundColor: 'black'
      };
    }
    return "navigation";
  }

}
