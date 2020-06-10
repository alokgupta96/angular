import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import * as moment from 'moment';

export interface Audits {
  id:string;
  formNumber:string;
  formName:number;
  frequency:string;
  category:number;
}
@Component({
  selector: 'app-audit-form-table',
  templateUrl: './audit-form-table.component.html',
  styleUrls: ['./audit-form-table.component.css']
})
export class AuditFormTableComponent implements OnInit {
  data: any;
  auditList: Audits[] = [];
  result: any;
  constructor(public dialog : MatDialog,
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getAuditFormList();
  }

  getAuditFormList() {
    this.apiService.auditFormList().subscribe((data: Audits[])=>{
      const result : any = data;
      this.auditList = result.data;
    })
  }

  convertDate(createDate) {
    const date =  moment(createDate).format("Do MMM YYYY");
    return date;
  }


  auditFormDelete(auditId) {
    const idData ={
      id: auditId
    }
    this.apiService.deleteAuditFormList(idData).subscribe(result => {
      this.result = result;
      console.log('result', result)
      },
    (err) => {
      this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
    },
    () => {
      if (this.result.status === 'success') {
        this.getAuditFormList();
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
      }
    });
  }

  // delete
  openDeleteAuditForm(item) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Audit form',
        // icon: 'pi pi-info-circle',
        acceptLabel: 'Delete',
        rejectLabel: 'Cancel',
        acceptIcon: '',
        accept: () => { 
          this.auditFormDelete(item._id);
        },
        reject: () => { }
    });
  }
  // edit
  auditFormEdit(auditData){
    localStorage.setItem('auditData', JSON.stringify(auditData))
    this.router.navigate(['/audit-form-edit']);
  }

}
