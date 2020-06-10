import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export interface Staffs {
  firstName:string;
  lastName:string;
  email:string;
  userName:string;
  department:string;
  designation:string;
  phoneNumber:number;
  status:string;
}

interface Designation {
  name: string;
} 
export interface Departments {
  departmentName: any;
}

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})

export class StaffEditComponent implements OnInit {
  staffList: Staffs[] = [];
  data: any;
  staffEditForm: FormGroup;
  staff:any;
  Staffs: any;
  staffData: any;

  constructor( private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,) { }

    departmentList: Departments[] = []

  designations: Designation[] = [
    {name: 'Staff'},
    {name: 'Compliance'},
    {name: 'Operation Manager'}
  ]

  ngOnInit(): void {
    const staffIdData = localStorage.getItem('staffData')
    this.staffData = JSON.parse(staffIdData)
    this.staffEditForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password:[''],
      userName: [''],
      designation : [''],
      selectFormControl : [''],
      department : this.getDepartmentList(),
    })
    this.getDepartmentList();
    this.staffEditForm.controls["firstName"].setValue(this.staffData.firstName);
    this.staffEditForm.controls["lastName"].setValue(this.staffData.lastName);
    this.staffEditForm.controls["email"].setValue(this.staffData.email);
    this.staffEditForm.controls["password"].setValue(this.staffData.password);
    this.staffEditForm.controls["userName"].setValue(this.staffData.userName);
    this.staffEditForm.controls["designation"].setValue(this.staffData.designation);
    this.staffEditForm.controls["department"].setValue(this.staffData.department);
  }

  getDepartmentList() {
    this.apiService.departmentList().subscribe((data: Departments[])=>{
      const result : any = data;
      this.departmentList = result.data;
    })
  }
  editStaff() {
    const data = {
      "id": this.staffData._id,
      "firstName": this.staffEditForm.value.firstName,
      "lastName": this.staffEditForm.value.lastName,
      "email": this.staffEditForm.value.email,
      "password": this.staffEditForm.value.password,
      "userName": this.staffEditForm.value.userName,
      "designation": this.staffEditForm.value.designation,
      "department": this.staffEditForm.value.department,
    }
    this.apiService.editStaff(data).subscribe(result => {
        this.data = result;
        console.log("data", result)
      },
        (err) => {
            this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
        },
        () => {
            if (this.data.status === 'success') {
                this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
                this.router.navigate(['/staff']);
            } else {
                this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
            }
        });
  }

}
