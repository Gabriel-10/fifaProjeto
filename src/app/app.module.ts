import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CabecalhoViewComponent } from './views/cabecalho-view/cabecalho-view.component';
import { SBCViewComponent } from './views/sbc-view/sbc-view.component';
import { SBCComponent } from './components/sbc/sbc.component';
import { LandingPageLayoutComponent } from './layouts/landing-page-layout/landing-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CabecalhoViewComponent,
    SBCViewComponent,
    SBCComponent,
    LandingPageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
