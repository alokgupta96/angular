import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from 'src/app/users/delete-category/delete-category.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import * as moment from 'moment';

export interface Departments {
  departmentName: any;
  firstName:string;
  lastName:string;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentList: Departments[] = [];
  departmentId:any; 
  result: any;

  constructor(public dialog : MatDialog,
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  // delete
  openDeleteDepartment(item) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Department',
        // icon: 'pi pi-info-circle',
        acceptLabel: 'Delete',
        rejectLabel: 'Cancel',
        acceptIcon: '',
        accept: () => { 
          this.departmentDelete(item._id);
        },
        reject: () => { }
    });
  }

  convertDate(createDate) {
    const date =  moment(createDate).format("Do MMM YYYY");
    console.log(date);
    return date;
  }

  departmentDelete(departmentId) {
    const idData ={
      id: departmentId
    }
    this.apiService.deleteDepartmentList(idData).subscribe(result => {
      this.result = result;
      console.log('result', result)
      },
    (err) => {
      this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
    },
    () => {
      if (this.result.status === 'success') {
        this.getDepartmentList();
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
      } else {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
      }
    });
  }

  ngOnInit(): void {
    this.getDepartmentList();
    // this.convertDate();
  }

  getDepartmentList() {
    this.apiService.departmentList().subscribe((data: Departments[])=>{
      const result : any = data;
      this.departmentList = result.data;
    })
  }

  onKey(event: any) {
    var val = event.target.value;
    if (val && val.trim() != '') {
      const filterData = event.target.value ? this.departmentList.filter(row => row.departmentName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) : this.departmentList;
      this.departmentList = filterData
    } else {
      this.getDepartmentList();
    }
  }
   // edit
   departmentEdit(departmentData){
    localStorage.setItem('departmentData', JSON.stringify(departmentData))
    this.router.navigate(['/department-edit']);
  }
}
