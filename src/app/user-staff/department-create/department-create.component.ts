import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

interface Training {
  name: string;
} 

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})

export class DepartmentCreateComponent implements OnInit {
  departmentCreateForm: FormGroup;
   data: any;

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
    this.departmentCreateForm = this.formBuilder.group({
      departmentName: [''],
      trainingId : [''],
      selectFormControl : [''],
      categoryId : ['']
    })
  }

  createDepartment() {
    // this.submitted = true;
    const data = {
      "departmentName": this.departmentCreateForm.value.departmentName,
      "trainingId": this.departmentCreateForm.value.trainingId,
      "categoryId": this.departmentCreateForm.value.categoryId,
    }
    this.apiService.createDepartment(data).subscribe(result => {
      this.data = result;
      console.log("data", result)
    },
      (err) => {
          this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
      },
      () => {
          if (this.data.status === 'success') {
              this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
              // localStorage.setItem('token', this.data.token);
              this.router.navigate(['/department']);
          } else {
              this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
          }
      });
    // console.log("data", )
  }


}
