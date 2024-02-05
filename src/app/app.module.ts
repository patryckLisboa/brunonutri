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
import { PlansComponent } from './components/home/plans/plans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { PBackgroundComponent } from './shared/components/p-background/p-background.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { FaqComponent } from './components/home/faq/faq.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    PNavigationComponent,
    PBackgroundComponent,
    EvolutionsComponent,
    InformationComponent,
    PCarouselComponent,
    EBookComponent,
    ProtocolComponent,
    PlansComponent,
    AboutMeComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
