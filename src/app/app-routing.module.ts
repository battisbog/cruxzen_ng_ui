import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import { DashboardComponent } from './dashboard/dashboard.component';

// Define the routes
const routes: Routes = [
  {
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  // Potentially more routes in the future...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
