import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from 'src/app/users/delete-category/delete-category.component';

@Component({
  selector: 'app-induction-contents',
  templateUrl: './induction-contents.component.html',
  styleUrls: ['./induction-contents.component.css']
})
export class InductionContentsComponent implements OnInit {

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
