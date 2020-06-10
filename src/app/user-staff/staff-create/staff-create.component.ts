import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

interface Designation {
  name: string;
} 
interface Department {
  name: string;
} 
export interface Departments {
  departmentName: any;
}

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})

export class StaffCreateComponent implements OnInit {
  staffCreateForm: FormGroup;
  //  submitted = false;
   data: any;
  
  constructor( private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,) { }
    departmentList: Departments[] = []
    designations: Designation[] = [
    {name: 'Staff'},
    {name: 'Compliance'},
    {name: 'Operation Manager'}
  ]
  ngOnInit(): void {
    this.staffCreateForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password:[''],
      userName: [''],
      designation : [''],
      selectFormControl : [''],
      department : this.getDepartmentList(),
    })
  }

  getDepartmentList() {
    this.apiService.departmentList().subscribe((data: Departments[])=>{
      const result : any = data;
      this.departmentList = result.data;
    })
  }

  createStaff() {
    // this.submitted = true;
    const data = {
      "firstName": this.staffCreateForm.value.firstName,
      "lastName": this.staffCreateForm.value.lastName,
      "email": this.staffCreateForm.value.email,
      "phoneNumber": this.staffCreateForm.value.phoneNumber,
      "password": this.staffCreateForm.value.password,
      "designation": this.staffCreateForm.value.designation,
      "department": this.staffCreateForm.value.department.departmentName,
      "userName":  this.staffCreateForm.value.userName,
    }
    this.apiService.createStaff(data).subscribe(result => {
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
              this.router.navigate(['/staff']);
          } else {
              this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
          }
      });
  }

}
