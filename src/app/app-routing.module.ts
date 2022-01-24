import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { navbarRoute } from './layouts/navbar/navbar.route';

const LAYOUT_ROUTES = [navbarRoute];

const ROUTES: Routes = [
  ...LAYOUT_ROUTES,
];

@NgModule({
  imports: [
    RouterModule.forRoot([...ROUTES], {
      enableTracing: false,
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
