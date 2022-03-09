import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  HostListener,
} from '@angular/core';
import { Employee } from 'src/app/models/app.employee.model';
import { EmployeeLogic } from 'src/app/models/app.logic';
import { Product } from 'src/app/models/app.product.model';
import { ParentComponent } from 'src/app/components/employeecomponent/app.parentemployee.component';

@Component({
  selector: 'app-employee-component',
  templateUrl: './app.employee.view.html',
})
export class EmployeeComponent implements OnInit, OnChanges {
  employee: Employee;
  empNo: number;
  employees: Array<Employee>;
  private logic: EmployeeLogic;
  columnHeaders: Array<string>;
  row1: number;
  generateRow(): void {
    this.row1 = this.row1;
    console.log('invoked' + this.row1);
  }
  constructor() {
    this.employee = new Employee(0, '', 0, '');
    this.employees = new Array<Employee>();
    this.logic = new EmployeeLogic();
    this.columnHeaders = new Array<string>();
    this.row1 = 0;
    this.empNo = 0;
  }

  ngOnInit() {
    console.log('ngOnInit is invoked');
    this.employees = this.logic.getEmployees();
    this.columnHeaders = Object.keys(this.employee);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is invoked');
  }
  onAddRow(event: any): void {
    this.employee = event;
    console.log(`Row ${this.employee}`);
  }
}
