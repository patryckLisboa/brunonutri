import { Component } from '@angular/core';

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss'],
})
export class EBookComponent {
  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.body > section');
    console.log('Número de sections:', sections.length);
  }
}
 