import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailPageComponent, pathMatch: 'full' },
  { path: 'contact/:id', component: ContactPageComponent, pathMatch: 'full' },
  { path: 'edit-listing/:id', component: EditListingPageComponent, pathMatch: 'full' },
  { path: 'my-listings', component: MyListingsPageComponent, pathMatch: 'full' },
  { path: 'new-listing', component: NewListingPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
