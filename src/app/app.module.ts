import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { MatIconModule } from '@angular/material/icon'; 
import { PNavigationComponent } from './shared/components/p-navigation/p-navigation.component';
import { EvolutionsComponent } from './components/home/evolutions/evolutions.component';
import { InformationComponent } from './components/home/information/information.component';
import { PCarouselComponent } from './shared/components/p-carousel/p-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { EBookComponent } from './components/e-book/e-book.component';
import { ProtocolComponent } from './components/home/protocol/protocol.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    PNavigationComponent,
    EvolutionsComponent,
    InformationComponent,
    PCarouselComponent,
    EBookComponent,
    ProtocolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
