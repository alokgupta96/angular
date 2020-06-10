import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-trainings',
  templateUrl: './create-trainings.component.html',
  styleUrls: ['./create-trainings.component.css']
})
export class CreateTrainingsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateTrainingsComponent>,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
