import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CabecalhoViewComponent } from './views/cabecalho-view/cabecalho-view.component';
import { SBCViewComponent } from './views/sbc-view/sbc-view.component';
import { SBCComponent } from './components/sbc/sbc.component';
import { LandingPageLayoutComponent } from './layouts/landing-page-layout/landing-page-layout.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioViewComponent } from './views/inicio-view/inicio-view.component';
import { RushComponent } from './components/rush/rush.component';
import { RushViewComponent } from './views/rush-view/rush-view.component';
import { RivalsComponent } from './components/rivals/rivals.component';
import { RivalsViewComponent } from './views/rivals-view/rivals-view.component';
import { CardAcessoRapidoComponent } from './components/card-acesso-rapido/card-acesso-rapido.component';
import { FutChampionsComponent } from './components/fut-champions/fut-champions.component';
import { FutChampionsViewComponent } from './views/fut-champions-view/fut-champions-view.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { ObjetivosViewComponent } from './views/objetivos-view/objetivos-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CabecalhoViewComponent,
    SBCViewComponent,
    SBCComponent,
    LandingPageLayoutComponent,
    InicioComponent,
    InicioViewComponent,
    RushComponent,
    RushViewComponent,
    RivalsComponent,
    RivalsViewComponent,
    CardAcessoRapidoComponent,
    FutChampionsComponent,
    FutChampionsViewComponent,
    ObjetivosComponent,
    ObjetivosViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
