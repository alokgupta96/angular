import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

   constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // edit dialog

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // delete dialog

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      width: '270px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
