import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input'; // Add this
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';
import { CompoundEditComponent } from './compound-edit/compound-edit.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CompoundListComponent,
    CompoundDetailComponent,
    CompoundEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Ensure ReactiveFormsModule is imported
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
     FlexLayoutModule,
    MatPaginatorModule,
    MatInputModule, // Add this
    MatFormFieldModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
