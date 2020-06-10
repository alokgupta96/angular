import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';

export interface Sites {
  id: string;
  siteName: string;
  staff: number;
  customerName: string;
  auditformId: number;
  date: number;
  status: string;
}

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})

export class SitesComponent implements OnInit {

  data: any;
  siteList: Sites[] = [];
  result: any;

  constructor(private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getSiteList();
  }

  getSiteList() {
    this.apiService.siteList().subscribe((data: Sites[]) => {
      const result: any = data;
      this.siteList = result.data;
    })
  }

  onKey(event: any) {
    var val = event.target.value;
    if (val && val.trim() != '') {
      const filterData = event.target.value ? this.siteList.filter(row => row.siteName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) : this.siteList;
      this.siteList = filterData
    } else {
      this.getSiteList();
    }
  }

  convertDate(createDate) {
    const date = moment(createDate).format("Do MMM YYYY");
    return date;
  }

  // delete
  siteDelete(siteId) {
    const idData = {
      id: siteId
    }
    this.apiService.deleteSiteList(idData).subscribe(result => {
      this.result = result;
    },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
      },
      () => {
        if (this.result.status === 'success') {
          this.getSiteList();
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
        } else {
          this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
        }
      });
  }

  deleteSite(item) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Site',
      // icon: 'pi pi-info-circle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptIcon: '',
      accept: () => {
        this.siteDelete(item._id);
      },
      reject: () => { }
    });
  }

  editSite(siteData) {
    localStorage.setItem('siteData', JSON.stringify(siteData))
    this.router.navigate(['/edit-site']);
  }

  changeStatus(site, siteStatus) {
    this.spinner.show();
    const statusData = {
      'id': site._id,
      'status': siteStatus.toString(),
      "customerId": site.customerId,
      "siteName": site.siteName,
      "customerName": site.customerName,
      "staff": site.staff,
      "auditformId": site.auditformId,
      "manager": site.manager,
      "startdate": site.startdate,
      "incidentform": site.incidentform,
      "form": site.form,
    }
    this.apiService.editSite(statusData).subscribe(result => {
      this.data = result;
    },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
        this.spinner.hide();
      },
      () => {
        if (this.data.status === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
          this.getSiteList();
          this.spinner.hide();
        } else {
          this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
          this.spinner.hide();
        }
      });
  }

}
