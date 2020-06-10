import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';

export interface Customers {
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  userName:string;
  phoneNumber:number;
  status:string;
  company:string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList: Customers[] = [];
  result: any;
  data: any;
  constructor(public dialog : MatDialog,
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }
  
    // list
  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList() {
    this.apiService.customerList().subscribe((data: Customers[])=>{
      const result : any = data;
      this.customerList = result.data;
    })
  }
  
  onKey(event: any) {
    var val = event.target.value;
    if (val && val.trim() != '') {
      const filterData = event.target.value ? this.customerList.filter(row => row.firstName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) : this.customerList;
      this.customerList = filterData
    } else {
      this.getCustomerList();
    }
  }
   // delete
   customerDelete(customerId) {
    const idData ={
      id: customerId
    }
    this.apiService.deleteCustomerList(idData).subscribe(result => {
      this.result = result;
      console.log('result', result)
      },
    (err) => {
      this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
    },
    () => {
      if (this.result.status === 'success') {
        this.getCustomerList();
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
      }
    });
  }
  deleteCustomer(item) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Customer',
        // icon: 'pi pi-info-circle',
        acceptLabel: 'Delete',
        rejectLabel: 'Cancel',
        acceptIcon: '',
        accept: () => { 
          this.customerDelete(item._id);
        },
        reject: () => { }
    });
  }

  

  // edit
  editCustomer(customerData){
    localStorage.setItem('customerData', JSON.stringify(customerData))
    this.router.navigate(['/customer-edit']);
  }

  // customer details
  detailsCustomer(customerData){
    localStorage.setItem('customerData', JSON.stringify(customerData))
    this.router.navigate(['/customer-details']);
  }

  changeStatus(customer, customerStatus) {
    const customerData = {
      "id": customer._id,
      "firstName": customer.firstName,
      "lastName": customer.lastName,
      "email": customer.email,
      "password": customer.password,
      "userName": customer.userName,
      "phoneNumber": customer.phoneNumber,
      "company": customer.company,
      "status": customerStatus.toString(),
      // "siteName": this.customerEditForm.value.siteName.siteName,
    }
    this.apiService.editCustomer(customerData).subscribe(result => {
        this.data = result;
        console.log("data", result)
      },
        (err) => {
            this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
        },
        () => {
            if (this.data.status === 'success') {
                this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
                this.getCustomerList();
            } else {
                this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
            }
        });
  }
}
