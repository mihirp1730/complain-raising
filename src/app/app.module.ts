import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { environment } from 'src/environment/environment.prod';
import { ComplainReviewComponent } from './vendor-dashboard/complain-review/complain-review.component';
import { ComplainReviewDetailComponent } from './vendor-dashboard/complain-review-detail/complain-review-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { VendorDashboardModule } from './vendor-dashboard/vendor-dashboard.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponentComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      'customer-information'
    ),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    AppRoutingModule,
    CustomerDashboardModule,
    VendorDashboardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule],
})
export class AppModule {}
