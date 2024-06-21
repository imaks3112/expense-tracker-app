import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileService } from './services/user-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ProfileComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
