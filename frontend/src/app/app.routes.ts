import { Routes } from '@angular/router';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';
import { CompoundEditComponent } from './compound-edit/compound-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/compounds', pathMatch: 'full' },
  { path: 'compounds', component: CompoundListComponent },
  { path: 'compounds/:id', component: CompoundDetailComponent },
  { path: 'compound/edit/:id', component: CompoundEditComponent }
];
