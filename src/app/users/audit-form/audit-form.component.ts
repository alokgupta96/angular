import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

interface Category {
  name: string;
}
interface Frequency {
  name: string;
}

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.component.html',
  styleUrls: ['./audit-form.component.css']
})

export class AuditFormComponent implements OnInit {

  auditCreateForm: FormGroup;
  data: any;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router, ) { }

  categorys: Category[] = [
    { name: 'Cleaning Inspection' },
    { name: 'Electrical Inspection' },
    { name: 'WHS' },
    { name: 'Enviroment' },
    { name: 'Quality' },
    { name: 'Office Management' },
    { name: 'Operation Management' },
    { name: 'Systems' },
    { name: 'Mobile App' },
    { name: 'Security Operations' }
  ]

  frequencys: Frequency[] = [
    { name: 'Daily' },
    { name: 'Weekly' },
    { name: 'fornightly' },
    { name: 'Monthly' },
    { name: 'Quarterly' },
    { name: 'Yearly' },
    { name: 'Half Yearly' },
    { name: 'Once off' }
  ]

  ngOnInit(): void {
    this.auditCreateForm = this.formBuilder.group({
      formNumber: [''],
      formName: [''],
      frequency: [''],
      category: [''],
      selectFormControl: [''],
      role: ['']
    })
  }

  createAuditForm() {
    const data = {
      "role": 1,
      "formNumber": this.auditCreateForm.value.formNumber,
      "formName": this.auditCreateForm.value.formName,
      "frequency": this.auditCreateForm.value.frequency,
      "category": this.auditCreateForm.value.category,
    }
    this.apiService.createAuditForm(data).subscribe(result => {
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
