import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBCViewComponent } from './views/sbc-view/sbc-view.component';
import { LandingPageLayoutComponent } from './layouts/landing-page-layout/landing-page-layout.component';
import {InicioViewComponent} from "./views/inicio-view/inicio-view.component";
import {RushViewComponent} from "./views/rush-view/rush-view.component";
import {RivalsViewComponent} from "./views/rivals-view/rivals-view.component";
import {FutChampionsViewComponent} from "./views/fut-champions-view/fut-champions-view.component";
import {ObjetivosViewComponent} from "./views/objetivos-view/objetivos-view.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageLayoutComponent,
    children: [
      { path: 'sbc', component: SBCViewComponent },
      { path: 'inicio', component: InicioViewComponent },
      { path: 'rush', component: RushViewComponent },
      { path: 'rivals', component: RivalsViewComponent },
      { path: 'futchampions', component: FutChampionsViewComponent },
      { path: 'objetivos', component: ObjetivosViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
