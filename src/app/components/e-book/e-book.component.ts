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
    const alturaPagina = 575;
    const posicaoScroll = window.scrollY 
    this.paginaAtual = Math.ceil(posicaoScroll / alturaPagina);
  }

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.body > section');
    console.log('Número de sections:', sections.length);
  }

  
}
 