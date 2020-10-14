import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GokuldhamComponent } from './gokuldham/gokuldham.component';
import { MahasangramComponent } from './mahasangram/mahasangram.component';
import { MahasangramAdminComponent } from './mahasangram-admin/mahasangram-admin.component';

const routes: Routes = [
  { path: 'gokuldham', component: GokuldhamComponent },
  { path: 'mahasangram-admin', component: MahasangramAdminComponent },
  { path: 'mahasangram', component: MahasangramComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
