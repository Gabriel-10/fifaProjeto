import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBCViewComponent } from './views/sbc-view/sbc-view.component';
import { LandingPageLayoutComponent } from './layouts/landing-page-layout/landing-page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageLayoutComponent,
    children: [
      { path: 'sbc', component: SBCViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
