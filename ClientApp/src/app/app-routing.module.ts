import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GokuldhamComponent } from './gokuldham/gokuldham.component';
import { GokuldhamAdminComponent } from './gokuldham-admin/gokuldham-admin.component';
import { MahasangramComponent } from './mahasangram/mahasangram.component';
import { MahasangramAdminComponent } from './mahasangram-admin/mahasangram-admin.component';

const routes: Routes = [
  { path: 'gokuldham-admin', component: GokuldhamAdminComponent, pathMatch: 'full' },
  { path: 'gokuldham', component: GokuldhamComponent, pathMatch: 'full' },
  { path: 'mahasangram-admin', component: MahasangramAdminComponent, pathMatch: 'full' },
  { path: 'mahasangram', component: MahasangramComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
