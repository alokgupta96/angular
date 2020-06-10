import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

export interface Sites {
  siteName: string;
  staff: number;
  customerName: string;
  auditformId: number;
  date: number;
  status: string;
  incidentform: string;
  form: string;
}
export interface Staffs {
  firstName: string;
}
export interface Customers {
  firstName: string;
}

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent implements OnInit {
  manager = new FormControl();
  managerList: string[] = ['Operation manager', 'Compliance manager'];
  staff = new FormControl();
  staffList: string[] = [];
  customerList: Customers[] = [];
  selecte = 'Audit form';
  isValid: boolean = true;
  siteEditForm: FormGroup;
  data: any;
  siteData: any;
  toppingList: string[] = ['CHW site ', 'CHW site1', 'CHW site2'];
  auditList: string[] = ['CHW site audit', 'CHW site audit1', 'CHW site audit2'];
  formList: string[] = ['Audit Form', 'Incident Form'];
  result: any;
  isAudit: boolean = false;
  isIncident: boolean = false;
  isAuditIncient: boolean = false;
  children: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const siteIdData = localStorage.getItem('siteData')
    this.siteData = JSON.parse(siteIdData)
    this.siteEditForm = this.formBuilder.group({
      customerId: [''],
      siteName: [''],
      customerName: this.getCustomerList(),
      staff: this.getStaffList(),
      auditformId: [''],
      manager: [''],
      startdate: [''],
      incidentform: [''],
      form: ['']
    })
    this.getStaffList();
    this.getCustomerList();
    this.siteEditForm.controls["customerId"].setValue(this.siteData.customerName._id);
    this.siteEditForm.controls["siteName"].setValue(this.siteData.siteName);
    this.siteEditForm.controls["customerName"].setValue(this.siteData.customerName);
    this.siteEditForm.controls["staff"].setValue(this.siteData.staff);
    this.siteEditForm.controls["auditformId"].setValue(this.siteData.auditformId);
    this.siteEditForm.controls["incidentform"].setValue(this.siteData.incidentform);
    this.siteEditForm.controls["manager"].setValue(this.siteData.manager);
    this.siteEditForm.controls["startdate"].setValue(this.siteData.startdate);
    this.siteEditForm.controls["form"].setValue(this.siteData.form);
    for (let item of this.siteData.form) {
      if ((item == 'Audit Form') && (this.siteData.form.length == 1)) {
        this.isAudit = true;
        this.isIncident = false;
        this.isAuditIncient = false;
      } else if ((item == 'Incident Form') && (this.siteData.form.length == 1)) {
        this.isAudit = false;
        this.isIncident = true;
        this.isAuditIncient = false;
      } else if (this.siteData.form.length == 2) {
        this.isAuditIncient = true;
        this.isIncident = false;
        this.isAudit = false;
      } else if (this.siteData.form.length == 0) {
        this.isAuditIncient = false;
        this.isIncident = false;
        this.isAudit = false;
      }
    }
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

  editSite() {
    const data = {
      "id": this.siteData._id,
      "customerId": this.siteEditForm.value.customerName._id,
      "siteName": this.siteEditForm.value.siteName,
      "customerName": this.siteEditForm.value.customerName,
      "staff": this.siteEditForm.value.staff,
      "auditformId": this.siteEditForm.value.auditformId,
      "toppings": this.siteEditForm.value.toppings,
      "manager": this.siteEditForm.value.manager,
      "startdate": this.siteEditForm.value.startdate,
      "incidentform": this.siteEditForm.value.incidentform,
      "form": this.siteEditForm.value.form,
    }
    this.apiService.editSite(data).subscribe(result => {
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
  }

  changeValue(valid: boolean) {
    this.isValid = valid;
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

}
