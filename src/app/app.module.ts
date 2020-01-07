import { DropdownDirective } from './dropdown.directive';
import { MainItemComponent } from './main/main-item/main-item.component';
import { NewsService } from './news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { CategoryPipe } from './category.pipe';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MainItemComponent,
    SearchPipe,
    DropdownDirective,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
