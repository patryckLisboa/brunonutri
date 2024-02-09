import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-p-navigation',
  templateUrl: './p-navigation.component.html',
  styleUrls: ['./p-navigation.component.scss'],
})
export class PNavigationComponent {
  currentIndex: number = 0;
  @Output() indexButton = new EventEmitter();
  @Input() set buttonPosition(value: number) {
    if(value)
    this.setActive(value);
  }


  setActive(index: number) {
    this.currentIndex = index;
    this.indexButton.emit(index);
  }

  getNavBarStyle(side: string) {
    const initNumber = window.innerWidth < 750 ? 175 : 160;
    const widthButton = window.innerWidth < 750 ? 58 : 107;
  
    return {
      backgroundColor: 'black',
      borderTopRightRadius: '100px',
      borderTopLeftRadius: '100px',
      height: '30px',
      width: '100%',
    };
  }
}
