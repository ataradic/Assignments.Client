
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AssignmentDto } from './assignment.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsListService {
  private updateAssignmentsList = new ReplaySubject<AssignmentDto[]>(1);
  private _updateAssignmentsList$ = this.updateAssignmentsList.asObservable();

  constructor() { }
 

  updateList(list: AssignmentDto[]) {
    this.updateAssignmentsList.next(list);
  }
  

  updateAssignmentsList$() {
    return this._updateAssignmentsList$;
  }
}
