import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent }];

export const routing = RouterModule.forRoot(appRoutes);