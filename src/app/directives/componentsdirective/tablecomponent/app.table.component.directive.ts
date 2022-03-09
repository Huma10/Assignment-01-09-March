import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { EmployeeType } from 'src/app/models/app.constants';
import { Employee } from 'src/app/models/app.employee.model';

@Component({
  selector: 'app-table-ui',
  templateUrl: './app.table.component.directive.view.html',
})
export class TableComponent {
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  emp: Employee;

  constructor() {
    this.emp = new Employee(0, '', 0, '');
  }
  addRow() {
    this.newAttribute = new Employee(0, '', 0, '');
    this.fieldArray.push(this.newAttribute);
    console.log(this.fieldArray);
  }

  deleteRow(index: number): boolean {
    this.fieldArray.splice(index, 1);
    return true;
  }
}
