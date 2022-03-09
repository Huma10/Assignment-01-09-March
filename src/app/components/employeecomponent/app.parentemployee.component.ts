import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app.product.model';

@Component({
  selector: 'app-parentemployee-component',
  templateUrl: './app.parentemployee.view.html'
})

export class ParentComponent implements OnInit {

  canSort:Product = new Product(0,"","","","","",0);
  empNo:string;
  private sortOrder = 1;

  constructor() { }

  ngOnInit() { }
  @Input() columnName:any;

  @Input() sort:any = "asc";
  @HostListener('click')
  sortData() {
      this.sort = this.sort === 'asc' ? 'desc' : 'asc';
  }

}
