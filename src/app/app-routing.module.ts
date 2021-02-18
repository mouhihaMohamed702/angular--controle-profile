import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './home/home.component';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full',

  },
 
  {
    path:'', component:AdminComponent,
       children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path:'**',
    redirectTo:'/home'
  }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
