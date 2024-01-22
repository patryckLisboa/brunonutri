import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'swiper/swiper-bundle.css';
declare var Swiper: any;

@Component({
  selector: 'app-p-carousel',
  templateUrl: './p-carousel.component.html',
  styleUrls: ['./p-carousel.component.scss']
})
export class PCarouselComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const swiper = new Swiper(this.swiperContainer.nativeElement, {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
      });
    });
  }
}
