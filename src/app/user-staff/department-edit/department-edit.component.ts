import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

interface Training {
  name: string;
} 
@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  departmentEditForm: FormGroup;
   data: any;
  departmentData: any;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,) { }
   
  trainings: Training[] = [
    {name: 'All'},
    {name: 'Service'},
    {name: 'Specialised Training'},
    {name: 'Site Specific Training'},
    {name: 'Genral Training'},
    {name: 'Security'}
  ]

  ngOnInit(): void {
    const departmentIdData = localStorage.getItem('departmentData')
    this.departmentData = JSON.parse(departmentIdData)
    this.departmentEditForm = this.formBuilder.group({
      departmentName: [''],
      trainingId: [''],
      selectFormControl : [''],
      categoryId : [''],
    })
    this.departmentEditForm.controls["departmentName"].setValue(this.departmentData.departmentName);
    this.departmentEditForm.controls["trainingId"].setValue(this.departmentData.trainingId);
    this.departmentEditForm.controls["categoryId"].setValue(this.departmentData.categoryId);
  }

  editDepartment() {
    const data = {
      "id": this.departmentData._id,
      "departmentName": this.departmentEditForm.value.departmentName,
      "trainingId": this.departmentEditForm.value.trainingId,
      "categoryId": this.departmentEditForm.value.categoryId,
    }
    this.apiService.editDepartment(data).subscribe(result => {
        this.data = result;
        console.log("data", result)
      },
        (err) => {
            this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
        },
        () => {
            if (this.data.status === 'success') {
                this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
                this.router.navigate(['/department']);
            } else {
                this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
            }
        });
  }

}
