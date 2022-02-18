import { AssignmentsListService } from './../../Services/assignments-list.service';
import { CreateAssignmentDto, TypeDto } from './../../Services/assignment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/Services/assignment.service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {

  types: TypeDto[] = [];
  assignmentForm: FormGroup;
  validationErrors: string[] = [];
 

  constructor(private fb: FormBuilder, private router: Router, private AssignmentsService: AssignmentsService,private AssignmentsListService:AssignmentsListService) { }
  ngOnInit(): void {
    this.inititializeForm();
    this.getTypes();
   
  }

  inititializeForm() {

    this.assignmentForm = this.fb.group({
      AssignmentName: ['', Validators.required],
      AssignmentDescription: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: [null],
      IsRepeated: [true],
      TypeId: ['', Validators.required]

    });
  }
  createAssignment() {
    debugger
    this.AssignmentsService.createAssignment(this.assignmentForm.value).subscribe(
      res => {
       
        this.assignmentForm.reset()
        this.router.navigateByUrl('');
      },
      err => {
        console.log(err);
      }
    );
  }

  getTypes() {
    this.AssignmentsService.getTypes().subscribe(response => {
      if (response)
        this.types = response;
    })
  }
}

