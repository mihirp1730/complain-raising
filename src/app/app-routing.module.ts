import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainRaisingComponent } from './customer-dashboard/complain-raising/complain-raising.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ComplainReviewComponent } from './vendor-dashboard/complain-review/complain-review.component';

const routes: Routes = [
  { path: 'complain-raising', component: ComplainRaisingComponent },
  { path: 'complain-review', component: ComplainReviewComponent },
  { path: '', redirectTo: '/complain-raising', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
