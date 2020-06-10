import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from 'src/app/users/delete-category/delete-category.component';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.css']
})
export class ActionPlanComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
