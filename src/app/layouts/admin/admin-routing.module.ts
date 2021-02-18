import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'portfolio',   component: PortfolioComponent },
  { path: 'contact',   component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
