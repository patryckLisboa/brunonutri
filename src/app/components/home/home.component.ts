import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollY = 0; // Ajuste a altura limite conforme necessário

  getNavigationClass() {
    this.scrollY = scrollY
    if (scrollY >= 743) {
      return "navigation-fixed"
    }
    return "navigation";
  }

}
