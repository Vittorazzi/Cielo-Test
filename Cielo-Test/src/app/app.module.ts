import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NewsComponent } from './news/news.component';
import { NewsBlock } from './news/newsBlock/newsBlock.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavigatorComponent,
    NewsComponent,
    NewsBlock,
    ArrowButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
