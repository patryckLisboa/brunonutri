import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss'],
})
export class EBookComponent {
  paginaAtual = 0;
  
  @HostListener('window:scroll')
  onScroll(): void {
    this.paginaAtual = Math.ceil(window.scrollY  / 575);
  }
  
}
 