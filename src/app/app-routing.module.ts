import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CezarComponent } from './views/cezar/cezar.component';
import { PolybiusComponent } from './views/polybius/polybius.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomophonicComponent } from './views/homophonic/homophonic.component';
import { TrithemiusComponent } from './views/trithemius/trithemius.component';

const routes: Routes = [
  { path: 'cezar', component: CezarComponent },
  { path: 'polybius', component: PolybiusComponent },
  { path: 'homophonic', component: HomophonicComponent },
  { path: 'trithemius', component: TrithemiusComponent },
  { path: '',   redirectTo: '/cezar', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
