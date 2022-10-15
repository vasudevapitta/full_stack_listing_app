import { fakeMyListings } from './../fake-data';
import { Listing } from './../types';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss']
})
export class EditListingPageComponent implements OnInit {
listing: Listing | undefined
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.listing = fakeMyListings.find(listing => listing.id === id)
  }

  onSubmit(): void {
    alert('Saving changes to the listing...')
    this.router.navigateByUrl('/my-listings')
  }

}
