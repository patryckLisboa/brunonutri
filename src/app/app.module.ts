import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { MatIconModule } from '@angular/material/icon'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PNavigationComponent } from './shared/components/p-navigation/p-navigation.component';
import { EvolutionsComponent } from './components/home/evolutions/evolutions.component';
import { InformationComponent } from './components/home/information/information.component';
import { PCarouselComponent } from './shared/components/p-carousel/p-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    PNavigationComponent,
    EvolutionsComponent,
    InformationComponent,
    PCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
