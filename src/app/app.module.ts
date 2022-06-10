import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { ImagenesService } from './services/imagenes.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MenuComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
