import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from "./view/Home/home.component";
import { AppComponent } from './app.component';
import {MegaMenuModule} from "primeng/megamenu";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {TabViewModule} from "primeng/tabview";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    TabViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
