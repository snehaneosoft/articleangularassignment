import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ArticlesliderComponent } from './articleslider/articleslider.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    BannerComponent,
    ArticlesliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
