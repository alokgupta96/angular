import { Component, OnInit } from '@angular/core';
import { DeleteCategoryComponent } from 'src/app/users/delete-category/delete-category.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-audit-report',
  templateUrl: './audit-report.component.html',
  styleUrls: ['./audit-report.component.css']
})
export class AuditReportComponent implements OnInit {

  constructor(public dialog :MatDialog) { }

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
