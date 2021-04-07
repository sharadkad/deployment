import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { 
    path: '', redirectTo: '/dashboard', pathMatch:'full'
  },
  {
    path:'details', component: PlayerDetailsComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
