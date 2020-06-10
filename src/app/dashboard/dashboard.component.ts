import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: number;
  miss: number;
  Pending: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Delhi', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Kerala', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Rajasthan', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Maharashta', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Goa', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Karnataka', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Madhya Pradesh',weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Gujarat', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Uttar Pradesh', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Bihar',weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Tamil Nadu', weight: 0, symbol: 0, miss: 0, Pending: 0},
  {name: 'Haryana', weight: 0, symbol: 0, miss: 0, Pending: 0},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
