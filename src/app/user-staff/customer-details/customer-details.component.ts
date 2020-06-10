import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';

export interface Customers {
  customerName: string;
  id:string;
  siteName:string;
}

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  [x: string]: any;

  customerList: Customers[] = [];
  customerData: any;

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    const customerIdData = localStorage.getItem('customerData')
    var customerData = JSON.parse(customerIdData)
    this.getCustomerList(customerData._id);
  }

  getCustomerList(id) {
    const data = {
      "id": id
    }
    this.apiService.customerDetail(data).subscribe((data: Customers[])=>{
      const result : any = data;
      this.customerList = result.data;
    })
    console.log('result')
  }

   
  onKey(event: any) {
    var val = event.target.value;
    if (val && val.trim() != '') {
      const filterData = event.target.value ? this.customerList.filter(row => row.customerName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) : this.customerList;
      this.customerList = filterData
    } else {
      this.customerDetail();
    }
  }
}
