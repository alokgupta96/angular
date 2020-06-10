import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export interface Customers {
  firstName:string;
  lastName:string;
  email:string;
  userName:string;
  company:string;
  phoneNumber:number;
  status:string;
}
export interface Sites {
  siteName:string;
}

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  siteList: Sites[] = [];
  customerList: Customers[] = [];
  data: any;
  customerEditForm: FormGroup;
  customer:any;
  Customers: any;
  customerData: any;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    const customerIdData = localStorage.getItem('customerData')
    this.customerData = JSON.parse(customerIdData)
    this.customerEditForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password:[''],
      userName: [''],
      phoneNumber: [''],
      company: [''],
      selectFormControl : [''],
      // siteName:[''],
    })
    this.getSiteList();
    this.customerEditForm.controls["firstName"].setValue(this.customerData.firstName);
    this.customerEditForm.controls["lastName"].setValue(this.customerData.lastName);
    this.customerEditForm.controls["email"].setValue(this.customerData.email);
    this.customerEditForm.controls["password"].setValue(this.customerData.password);
    this.customerEditForm.controls["userName"].setValue(this.customerData.userName);
    this.customerEditForm.controls["phoneNumber"].setValue(this.customerData.phoneNumber);
    this.customerEditForm.controls["company"].setValue(this.customerData.company);
    // this.customerEditForm.controls["status"]
    console.log(this.customerData)
  }

  getSiteList() {
    this.apiService.siteList().subscribe((data: Sites[])=>{
      const result : any = data;
      this.siteList = result.data;
      // console.log(this.siteList)
    })
  }

  editCustomer() {
    const data = {
      "id": this.customerData._id,
      "firstName": this.customerEditForm.value.firstName,
      "lastName": this.customerEditForm.value.lastName,
      "email": this.customerEditForm.value.email,
      "password": this.customerEditForm.value.password,
      "userName": this.customerEditForm.value.userName,
      "phoneNumber": this.customerEditForm.value.phoneNumber,
      "company": this.customerEditForm.value.company,
      "status": this.customerEditForm.value.status,
    }
    this.apiService.editCustomer(data).subscribe(result => {
        this.data = result;
        console.log("data", result)
      },
        (err) => {
            this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
        },
        () => {
            if (this.data.status === 'success') {
                this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
                this.router.navigate(['/customer']);
            } else {
                this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
            }
        });
  }

}
