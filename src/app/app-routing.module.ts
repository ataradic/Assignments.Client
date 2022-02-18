import { CreateAssignmentComponent } from './Assignments/create-assignment/create-assignment.component';
import { AssignmentListComponent } from './Assignments/assignment-list/assignment-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AssignmentListComponent },
  { path: 'Assignments/create', component: CreateAssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
