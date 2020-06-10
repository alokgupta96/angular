import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-training-cate',
  templateUrl: './create-training-cate.component.html',
  styleUrls: ['./create-training-cate.component.css']
})
export class CreateTrainingCateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateTrainingCateComponent>,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
