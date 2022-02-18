

import { AssignmentsService, AssignmentDto, UserParamsDto } from './../../Services/assignment.service';
import { IAssignmemtDTo } from './../../_interfaces/IAssignmemtDTo';
import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { PaginatedResult } from 'src/app/_models/Pagination';
import { Observable } from 'rxjs';
import { AssignmentsListService } from 'src/app/Services/assignments-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css'],
 
})

export class AssignmentListComponent implements OnInit {
  pagination: UserParamsDto;
  selectedValues: any;
  assignments: AssignmentDto[] = [];
  http: any;
  constructor(private assignmentsService: AssignmentsService, private assignmentsListService :AssignmentsListService,private MessageService:MessageService) {
  }


  ngOnInit(): void {
    console.log(environment.API_BASE_URL);
    this.pagination = { PageNumber: 1, PageSize:100};
    console.log(this.pagination);
    this.loadAssignments();
    this.assignmentsListService.updateAssignmentsList$().subscribe(list=>
      this.assignments=list);
  }

  

  loadAssignments(){
    this.assignmentsService.getAssignments(this.pagination).subscribe(response => { 
      console.log(response);
      if (response)
        this.assignmentsListService.updateList(response);
    });
    }
  showSuccess(subject:string,content:string) {
    this.MessageService.add({ severity: 'success', summary: subject, detail: content });
  }
  setIsDone(assignment: any) {
    console.log(assignment);
    if (assignment.isDone)
      this.assignmentsService.updateDoneAssignment(assignment.id).subscribe(
        res => {
          debugger;
          this.showSuccess("המשימה בוצעה","");
         //updateassignmemt
          this.loadAssignments();
          this.assignmentsListService.updateList(this.assignments.filter(item => item.Id !== assignment.id))
        }
      );
  }
  deleteAssignment(assignment: IAssignmemtDTo) {
    debugger;
    console.log(assignment);
      this.assignmentsService.deleteAssignment(assignment.id).subscribe(
        res => {
          //updateassignmemt
          this.showSuccess("המשימה הוסרה", "");
          this.loadAssignments();
          this.assignmentsListService.updateList(this.assignments.filter(item => item.Id !== assignment.id))
        }
      );
  }

  getPaginationHeader(page: number, itemsPerPAge: number) {
    let params = new HttpParams();
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPAge);
    return params;
  }
}

