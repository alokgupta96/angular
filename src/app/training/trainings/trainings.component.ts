import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTrainingsComponent } from './create-trainings/create-trainings.component';
import { DeleteCategoryComponent } from 'src/app/users/delete-category/delete-category.component';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
// create dialog
openCreateDialog(): void {
  const dialogRef = this.dialog.open(CreateTrainingsComponent, {
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
