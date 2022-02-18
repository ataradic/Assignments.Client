import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentListComponent } from './Assignments/assignment-list/assignment-list.component';
import { CreateAssignmentComponent } from './Assignments/create-assignment/create-assignment.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AssignmentsService, API_BASE_URL } from './Services/assignment.service';
import { environment } from 'src/environments/environment.prod';
import { AssignmentsListService } from './Services/assignments-list.service';
import { ToastModule } from 'primeng/toast';
import myLocaleHe from '@angular/common/locales/he'
import { registerLocaleData } from '@angular/common/';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { MessageService } from 'primeng/api';
registerLocaleData(myLocaleHe);


@NgModule({
  declarations: [
    AppComponent,
    AssignmentListComponent,
    CreateAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CheckboxModule,
    InputTextModule,
    CalendarModule,
    HttpClientModule,
    ToastModule
  ],



  providers: [AssignmentsService,
    AssignmentsListService,
    MessageService,
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: "API_BASE_URL", useValue: environment.API_BASE_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
