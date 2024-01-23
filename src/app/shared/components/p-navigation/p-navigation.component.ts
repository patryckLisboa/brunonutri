import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-p-navigation',
  templateUrl: './p-navigation.component.html',
  styleUrls: ['./p-navigation.component.scss'],
})
export class PNavigationComponent {
  currentIndex: number = 0;
  @Output() indexButton = new EventEmitter();

  setActive(index: number) {
    this.currentIndex = index;
    this.indexButton.emit(index);
  }

  getNavBarStyle(side: string) {
    const initNumber = window.innerWidth < 750 ? 120 : 160;
    const widthButton = window.innerWidth < 750 ? 80 : 107;
    if (side == 'L') {
      if (!this.currentIndex) {
        return {
          backgroundColor: 'black',
          borderTopRightRadius: '100px',
          height: '30px',
          width: '100%',
          marginLeft: `-${initNumber}px`,
        };
      }
      const number = initNumber - widthButton * this.currentIndex;
      // console.log(`-${number}px`.replaceAll("--","+"));
      if (this.currentIndex < 2)
        return {
          backgroundColor: 'black',
          borderTopRightRadius: '100px',
          height: '30px',
          width: '100%',
          marginLeft: `-${number}px`.replaceAll('--', '+'),
        };
      return {
        backgroundColor: 'black',
        borderTopRightRadius: '50px',
        height: '30px',
        width: '100%',
        paddingRight: `-${number}px`.replaceAll('--', '+'),
      };
    }
    if (side == 'R') {
      if (!this.currentIndex) {
        return {
          backgroundColor: 'black',
          borderTopLeftRadius: '100px',
          height: '50px',
          width: '100%',
          paddingLeft: `${initNumber}px`,
        };
      }
      const number = initNumber - widthButton * this.currentIndex;
      if (this.currentIndex < 2)
        return {
          backgroundColor: 'black',
          borderTopLeftRadius: '100px',
          height: '50px',
          width: '100%',
          paddingLeft: `${number}px`,
        };

      return {
        backgroundColor: 'black',
        borderTopLeftRadius: '100px',
        height: '50px',
        width: '100%',
        marginRight: `${number}px`,
      };
    }
    // se index 0 : left - margin left -115px  && right - padding left +115px
    return null;
  }
}
