import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';

import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './Components/nav/nav.component';
import { AddRecipeComponent } from './Components/add-recipe/add-recipe.component';
import { MainComponent } from './Core/main/main.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AddRecipeComponent,
    MainComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
