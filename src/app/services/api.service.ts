import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBaseUrl } from './apiBaseUrl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

  export class ApiService {
    createSite(data: { siteName: any; customerName: any; staff: any; auditformId: any; manager: any; startDate: any; }) {
      throw new Error("Method not implemented.");
    }

    constructor(private http: HttpClient) { }

    // login
    login(user) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, method: 'post' };
        return this.http.post(ApiBaseUrl.API_ENDPOINT + 'adminLogin', user, options).pipe(map(res => <any>res));
    }

    // create staff
    createStaff(user){
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, method: 'post' };
        return this.http.post(ApiBaseUrl.API_ENDPOINT + 'addAdminStaff', user, options).pipe(map(res => <any>res));
    }

    // staff list
    getAll() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers, method: 'post' };
        return this.http.post(ApiBaseUrl.API_ENDPOINT + 'listAdminStaff', options).pipe(map(res => <any>res));
    }

    // edit list
    editStaff(staff) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'editStaff', staff, options).pipe(map(res => <any>res));
    }

    //  staff delete
    deleteStaffList(user){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'delete' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'deleteStaff', user, options).pipe(map(res => <any>res));
    }



    //////////// customer api integration
    // customer create
    createCustomer(user){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'addCustomer', user, options).pipe(map(res => <any>res));
    }

    // customer list
    customerList() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'listCustomer', options).pipe(map(res => <any>res));
    }
 
    // edit
    editCustomer(customer) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'editCustomer', customer, options).pipe(map(res => <any>res));
    }

    // delete
    deleteCustomerList(user){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'delete' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'deleteCustomer', user, options).pipe(map(res => <any>res));
    }

    // details
    customerDetail(user){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'delete' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'CustomerDetails', user, options).pipe(map(res => <any>res));
    }


    //////////// department api integration
    // department create
    createDepartment(user){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'addDepartment', user, options).pipe(map(res => <any>res));
    }

    // department list
    departmentList() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'listDepartment', options).pipe(map(res => <any>res));
    }

    //  department delete
    deleteDepartmentList(user){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'delete' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'deleteDepartment', user, options).pipe(map(res => <any>res));
    }
    
    // edit
    editDepartment(department) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'editDepartment', department, options).pipe(map(res => <any>res));
    }

    //////////// site api integration
    // site create
    createsite(site){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'addSites', site, options).pipe(map(res => <any>res));
    }

    // site list
    siteList() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'listSites', options).pipe(map(res => <any>res));
    }

    //  site delete
    deleteSiteList(site){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'delete' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'deleteSites', site, options).pipe(map(res => <any>res));
    }

    editSite(site) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'editSites', site, options).pipe(map(res => <any>res));
    }
    // status update
  statusUpdate(statusData) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers, method: 'post' };
    return this.http.post(ApiBaseUrl.API_ENDPOINT + 'updateSiteStatus', statusData, options).pipe(map(res => <any>res));
  }

  //////////// audit form api integration
    // audit form create
    createAuditForm(form){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'createAuditForm', form, options).pipe(map(res => <any>res));
    }

    // audit form list
    auditFormList() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'get' };
      return this.http.get(ApiBaseUrl.API_ENDPOINT + 'auditFormList', options).pipe(map(res => <any>res));
    }
   
    // audit form delete
    deleteAuditFormList(audit){
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'delete' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'DeleteAuditForm', audit, options).pipe(map(res => <any>res));
    }
    editAuditForm(audit) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers, method: 'post' };
      return this.http.post(ApiBaseUrl.API_ENDPOINT + 'UpdateAuditForm', audit, options).pipe(map(res => <any>res));
    }
  }
