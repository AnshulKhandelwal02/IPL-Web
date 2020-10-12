import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GokuldhamComponent } from './gokuldham/gokuldham.component';
import { MahasangramComponent } from './mahasangram/mahasangram.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'gokuldham', component: GokuldhamComponent },
  { path: 'mahasangram', component: MahasangramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
