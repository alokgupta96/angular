import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';

export interface Staffs {
  firstName:string;
  lastName:string;
  email:string;
  userName:string;
  department:string;
  designation:string;
  phoneNumber:number;
  status:string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

export class StaffComponent implements OnInit {

  [x: string]: any;
  staffId: any;
  data:any;
  staffList: Staffs[] = [];

  constructor(public dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) { }
    
    // staff list
    ngOnInit(): void {
      this.getStaffList();
    }

    getStaffList() {
      this.apiService.getAll().subscribe((data: Staffs[])=>{
        const result : any = data;
        this.staffList = result.data;
      })
    }

    onKey(event: any) {
      var val = event.target.value;
      if (val && val.trim() != '') {
        const filterData = event.target.value ? this.staffList.filter(row => row.firstName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) : this.staffList;
        this.staffList = filterData
      } else {
        this.getStaffList();
      }
    }

    staffDelete(staffId) {
      const idData ={
        id: staffId
      }
      this.apiService.deleteStaffList(idData).subscribe(result => {
        this.result = result;
        console.log('result', result)
        },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
      },
      () => {
        if (this.result.status === 'success') {
          this.getStaffList();
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
        } else {
          this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
        }
      });
    }

    // delete
    confirm2(item) {
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Staff',
          // icon: 'pi pi-info-circle',
          acceptLabel: 'Delete',
          rejectLabel: 'Cancel',
          acceptIcon: '',
          accept: () => { 
            this.staffDelete(item._id);
          },
          reject: () => { }
      });
    }

    // edit
    staffEdit(staffData){
      localStorage.setItem('staffData', JSON.stringify(staffData))
      this.router.navigate(['/staff-edit']);
    }
  
    changeStatus(staff, staffStatus) {
      const statusData = {
        "id": staff._id,
        "firstName": staff.firstName,
        "lastName": staff.lastName,
        "email": staff.email,
        "password": staff.password,
        "userName": staff.userName,
        "designation": staff.designation,
        "department": staff.department,
        "status": staffStatus.toString(),
      }
      this.apiService.editStaff(statusData).subscribe(result => {
          this.data = result;
        },
          (err) => {
              this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
          },
          () => {
              if (this.data.status === 'success') {
                  this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.data.message });
                  this.getStaffList();
              } else {
                  this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.data.message });
              }
          });
    }
  }
