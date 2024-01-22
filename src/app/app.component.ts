import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brunonutri';
  constructor(private cdr: ChangeDetectorRef) { }
  
  redrawScreen() {
    this.cdr.detectChanges();
    setTimeout(() => this.redrawScreen(), 500); // Chama novamente após 1 segundo
  }

  ngOnInit() {
    this.redrawScreen();
  }
}
