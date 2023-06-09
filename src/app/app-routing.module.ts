import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/edit',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'booth',
    loadChildren: () => import('./booth/booth.module').then( m => m.BoothPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'booth/:id',
    loadChildren: () => import('./booth-details/booth-details.module').then( m => m.BoothDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'evaluate/:id',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'navigate',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
