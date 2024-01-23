import { Component, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import { SwiperOptions } from 'swiper/types/swiper-options';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-p-carousel',
  templateUrl: './p-carousel.component.html',
  styleUrls: ['./p-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PCarouselComponent {
  imgIndex = 1;
  loadingPage = true;
  coverFlowEffect = {
    rotate: 30,
    stretch: 0,
    depth: window.innerWidth < 750 ? 300 : 0,
    modifier: 1,
    slideShadows: true
  }

  ngAfterViewInit() {
    setTimeout(() =>  this.loadingPage = false, 0);
  }

  imagens = [
    {
      index: 1,
      src: '../../../../assets/img/img-evolutions/img (1).jpeg',
      description: '6 meses',
    },
    {
      index: 2,
      src: '../../../../assets/img/img-evolutions/img (2).jpeg',
      description: '2 meses',
    },
    {
      index: 3,
      src: '../../../../assets/img/img-evolutions/img (3).jpeg',
      description: '3 meses',
    },
    {
      index: 4,
      src: '../../../../assets/img/img-evolutions/img (4).jpeg',
      description: '1 mês',
    },
    {
      index: 5,
      src: '../../../../assets/img/img-evolutions/img (5).jpeg',
      description: '3 meses',
    },
    {
      index: 6,
      src: '../../../../assets/img/img-evolutions/img (6).jpeg',
      description: '3 meses',
    },
    {
      index: 7,
      src: '../../../../assets/img/img-evolutions/img (7).jpeg',
      description: '2 meses',
    },
    {
      index: 8,
      src: '../../../../assets/img/img-evolutions/img (8).jpeg',
      description: '2 meses',
    },
    {
      index: 9,
      src: '../../../../assets/img/img-evolutions/img (9).jpeg',
      description: '3 meses',
    },
    {
      index: 10,
      src: '../../../../assets/img/img-evolutions/img (10).jpeg',
      description: '4 meses',
    },
    {
      index: 11,
      src: '../../../../assets/img/img-evolutions/img (11).jpeg',
      description: '3 meses',
    },
    {
      index: 12,
      src: '../../../../assets/img/img-evolutions/img (12).jpeg',
      description: '1 mês',
    },
    {
      index: 13,
      src: '../../../../assets/img/img-evolutions/img (13).jpeg',
      description: '3 meses',
    },
    {
      index: 14,
      src: '../../../../assets/img/img-evolutions/img (14).jpeg',
      description: '5 meses',
    },
    {
      index: 15,
      src: '../../../../assets/img/img-evolutions/img (15).jpeg',
      description: '3 meses',
    },
    {
      index: 16,
      src: '../../../../assets/img/img-evolutions/img (16).jpeg',
      description: '3 meses',
    },
    {
      index: 17,
      src: '../../../../assets/img/img-evolutions/img (17).jpeg',
      description: '5 meses',
    },
    {
      index: 18,
      src: '../../../../assets/img/img-evolutions/img (18).jpeg',
      description: '1 ano',
    },
    {
      index: 19,
      src: '../../../../assets/img/img-evolutions/img (19).jpeg',
      description: '1 mês',
    },
    {
      index: 20,
      src: '../../../../assets/img/img-evolutions/img (20).jpeg',
      description: '4 meses',
    },
    {
      index: 21,
      src: '../../../../assets/img/img-evolutions/img (21).jpeg',
      description: '5 meses',
    },
    {
      index: 22,
      src: '../../../../assets/img/img-evolutions/img (22).jpeg',
      description: '8 meses',
    },
  ];

  getImgDescription(): string {
    return this.loadingPage ? '' : this.imagens[this.imgIndex].description;
  }

  onSlideChange(event: any) {
    this.imgIndex =  event[0].activeIndex ;
  }
}
