import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

export interface Staffs {
  firstName: string;
}
export interface Customers {
  firstName: string;
}


@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.css']
})

export class CreateSiteComponent implements OnInit {

  manager = new FormControl();
  managerList: string[] = ['Operation manager', 'Compliance manager'];
  staff = new FormControl();
  staffList: string[] = [];
  customerList: Customers[] = [];
  children: any = [];
  selecte = 'Audit form';
  isValid: boolean;
  isValidBoth: boolean = false;
  siteCreateForm: FormGroup;
  data: any;
  toppingList: string[] = ['CHW site ', 'CHW site1', 'CHW site2'];
  auditList: string[] = ['CHW site audit', 'CHW site audit1', 'CHW site audit2'];
  formList: string[] = ['Audit Form', 'Incident Form'];
  result: any;
  isAudit: boolean = false;
  isIncident: boolean = false;
  isAuditIncient: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router, ) { }

  ngOnInit(): void {
    this.siteCreateForm = this.formBuilder.group({
      siteName: [''],
      customerName: this.getCustomerList(),
      staff: this.getStaffList(),
      auditformId: [''],
      manager: [''],
      startdate: [''],
      incidentform: [''],
      form: [''],
    })
  }

  getStaffList() {
    this.apiService.getAll().subscribe((data: Staffs[]) => {
      const result: any = data;
      for (let item of result.data) {
        var staffStatus = [];
        if (item.status == 0) {
          staffStatus.push(item)
          this.staffList = staffStatus;
        }
      }
    })
  }

  getCustomerList() {
    this.apiService.customerList().subscribe((data: Customers[]) => {
      const result: any = data;
      for (let item of result.data) {
        var customerStatus = [];
        if (item.status == 0) {
          customerStatus.push(item)
          this.customerList = customerStatus;
        }
      }
    })
  }

  createSite() {
    var staffArr = []
    for (let item of this.siteCreateForm.value.staff) {
      staffArr.push(item.firstName)
    }
    if (this.isAudit == true) {
      this.children = this.siteCreateForm.value.auditformId
    } else if (this.isIncident == true) {
      this.children = this.siteCreateForm.value.toppings
    } else if (this.isAuditIncient == true) {
      this.children = this.siteCreateForm.value.auditformId.concat(this.siteCreateForm.value.toppings)
    }
    const data = {
      "customerId": this.siteCreateForm.value.customerName._id,
      "siteName": this.siteCreateForm.value.siteName,
      "customerName": this.siteCreateForm.value.customerName.firstName,
      "staff": staffArr,
      "auditformId": this.children,
      "manager": this.siteCreateForm.value.manager,
      "startdate": this.siteCreateForm.value.startdate,
      "incidentform": this.siteCreateForm.value.incidentform,
      "form": this.siteCreateForm.value.form,
    }
    this.apiService.createsite(data).subscribe(result => {
      this.data = result;
    },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
      },
      () => {
        if (this.data.status === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
          this.router.navigate(['/sites']);
        } else {
          this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
        }
      });
    // console.log('data', data)
  }

  onCustomerChange(ob) {
    let selectedBook = ob.value;
    for (let item of selectedBook) {
      if ((item == 'Audit Form') && (selectedBook.length == 1)) {
        this.isAudit = true;
        this.isIncident = false;
        this.isAuditIncient = false;
      } else if ((item == 'Incident Form') && (selectedBook.length == 1)) {
        this.isAudit = false;
        this.isIncident = true;
        this.isAuditIncient = false;
      } else if (selectedBook.length == 2) {
        this.isAuditIncient = true;
        this.isIncident = false;
        this.isAudit = false;
      } else if (selectedBook.length == 0) {
        this.isAuditIncient = false;
        this.isIncident = false;
        this.isAudit = false;
      }
    }
  }

  changeStatus(siteStatus) {
    const statusData = {
      'id': siteStatus._id,
      'status': siteStatus.status
    }
    this.apiService.statusUpdate(statusData).subscribe(result => {
      this.result = result;
    },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
      },
      () => {
        if (this.result.status === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
        } else {
          this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
        }
      });
  }

}
