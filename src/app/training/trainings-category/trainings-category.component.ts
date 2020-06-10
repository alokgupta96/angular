import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTrainingCateComponent } from '../create-training-cate/create-training-cate.component';
import { DeleteCategoryComponent } from 'src/app/users/delete-category/delete-category.component';

@Component({
  selector: 'app-trainings-category',
  templateUrl: './trainings-category.component.html',
  styleUrls: ['./trainings-category.component.css']
})
export class TrainingsCategoryComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  // create dialog
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTrainingCateComponent, {
      width: '500px',
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



  ngOnInit(): void {
  }

}
