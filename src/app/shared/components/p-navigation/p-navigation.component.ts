import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-p-navigation',
  templateUrl: './p-navigation.component.html',
  styleUrls: ['./p-navigation.component.scss'],
})
export class PNavigationComponent {
  currentIndex: number = 0;
  isCrolling = false;

  @Output() activatedScroll = new EventEmitter();
  @Output() indexButton = new EventEmitter();
  @Input() set buttonPosition(value: number) {
    this.currentIndex = value;
  }

  setActive(index: number) {
    this.activeScroll();
    this.currentIndex = index;
    this.indexButton.emit(index);
  }

  getNavBarStyle() {
    return {
      backgroundColor: 'black',
      borderTopRightRadius: '100px',
      borderTopLeftRadius: '100px',
      height: '30px',
      width: '100%',
    };
  }

  activeScroll() {
    if (!this.isCrolling) {
      this.isCrolling = true;
      this.activatedScroll.emit(true);
      setTimeout(() => {
        this.activatedScroll.emit(false);
        this.isCrolling = false;
      }, 1500);
    }
  }
}
