import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export interface Audits {
  id:string;
  formNumber:string;
  formName:number;
  frequency:string;
  category:number;
}

interface Category {
  name: string;
} 
interface Frequency {
  name: string;
} 

@Component({
  selector: 'app-audit-form-edit',
  templateUrl: './audit-form-edit.component.html',
  styleUrls: ['./audit-form-edit.component.css']
})
export class AuditFormEditComponent implements OnInit {
  
  data: any;
  auditList: Audits[] = [];
  result: any;
  auditEditForm : FormGroup;
  auditData: any;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,) { }

    categorys: Category[] = [
      {name: 'Cleaning Inspection'},
      {name: 'Electrical Inspection'},
      {name: 'WHS'},
      {name: 'Enviroment'},
      {name: 'Quality'},
      {name: 'Office Management'},
      {name: 'Operation Management'},
      {name: 'Systems'},
      {name: 'Mobile App'},
      {name: 'Security Operations'}
    ]

    frequencys: Frequency[] = [
      {name: 'Daily'},
      {name: 'Weekly'},
      {name: 'fornightly'},
      {name: 'Monthly'},
      {name: 'Quarterly'},
      {name: 'Yearly'},
      {name: 'Half Yearly'},
      {name: 'Once off'}
    ]

  ngOnInit(): void {
    const auditIdData = localStorage.getItem('auditData')
    this.auditData = JSON.parse(auditIdData)
    this.auditEditForm = this.formBuilder.group({
      formNumber: [''],
      formName: [''],
      frequency:[''],
      category: [''],
      selectFormControl : [''],
    })
    this.auditEditForm.controls["formNumber"].setValue(this.auditData.formNumber);
    this.auditEditForm.controls["formName"].setValue(this.auditData.formName);
    this.auditEditForm.controls["frequency"].setValue(this.auditData.frequency);
    this.auditEditForm.controls["category"].setValue(this.auditData.category);
  }

  editAuditForm() {
    const data = {
      "id": this.auditData._id,
      "formNumber": this.auditEditForm.value.formNumber,
      "formName": this.auditEditForm.value.formName,
      "frequency": this.auditEditForm.value.frequency,
      "category": this.auditEditForm.value.category,
    }
    this.apiService.editAuditForm(data).subscribe(result => {
        this.data = result;
        console.log("data", result)
      },
        (err) => {
            this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
        },
        () => {
            if (this.data.status === 'success') {
                this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
                this.router.navigate(['/audit-form-table']);
            } else {
                this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
            }
        });
  }

}
