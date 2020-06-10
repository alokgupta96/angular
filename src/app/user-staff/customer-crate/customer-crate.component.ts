import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

export interface Sites {
  siteName:string;
}

@Component({
  selector: 'app-customer-crate',
  templateUrl: './customer-crate.component.html',
  styleUrls: ['./customer-crate.component.css']
})
export class CustomerCrateComponent implements OnInit {
  siteList: Sites[] = [];
  customerCreateForm: FormGroup;
  data : any;
  constructor( private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,) { }

  ngOnInit(): void {
    this.customerCreateForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      company : [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber:  [''],
      userName: [''],
      password:[''],
      // siteName:this.getSiteList(),
    })
  }
  getSiteList() {
    this.apiService.siteList().subscribe((data: Sites[])=>{
      const result : any = data;
      this.siteList = result.data;
    })
  }

  createCustomer() {
    // this.submitted = true;
    const data = {
      "firstName": this.customerCreateForm.value.firstName,
      "lastName": this.customerCreateForm.value.lastName,
      "company": this.customerCreateForm.value.company,
      "email": this.customerCreateForm.value.email,
      "phoneNumber": this.customerCreateForm.value.phoneNumber,
      "userName":  this.customerCreateForm.value.userName,
      "password": this.customerCreateForm.value.password,
      // "siteName": this.customerCreateForm.value.siteName.siteName,
    }
    this.apiService.createCustomer(data).subscribe(result => {
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
              this.router.navigate(['/customer']);
          } else {
              this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
          }
      });
    console.log("data" )
  }


}
