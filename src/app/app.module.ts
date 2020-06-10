import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ButtonModule} from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditFormComponent } from './users/audit-form/audit-form.component';
import { DragDropFormComponent } from './users/drag-drop-form/drag-drop-form.component';
import { CategoriesComponent } from './users/categories/categories.component';
import { EditCategoryComponent } from './users/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './users/delete-category/delete-category.component';
import { SitesComponent } from './sites/sites/sites.component';
import { FeedbackQusComponent } from './sites/feedback-qus/feedback-qus.component';
import { StaffComponent } from './user-staff/staff/staff.component';
import { CustomersComponent } from './user-staff/customers/customers.component';
import { DepartmentComponent } from './user-staff/department/department.component';
import { StaffCreateComponent } from './user-staff/staff-create/staff-create.component';
import { TrainingsCategoryComponent } from './training/trainings-category/trainings-category.component';
import { TrainingsComponent } from './training/trainings/trainings.component';
import { InductionContentsComponent } from './training/induction-contents/induction-contents.component';
import { CreateTrainingCateComponent } from './training/create-training-cate/create-training-cate.component';
import { CreateTrainingsComponent } from './training/trainings/create-trainings/create-trainings.component';
import { DepartmentCreateComponent } from './user-staff/department-create/department-create.component';
import { AuditReportComponent } from './report/audit-report/audit-report.component';
import { ActionPlanComponent } from './report/action-plan/action-plan.component';
import { AuditFormTableComponent } from './users/audit-form-table/audit-form-table.component';
import { CustomerCrateComponent } from './user-staff/customer-crate/customer-crate.component';
import { FormioComponent } from './users/drag-drop-form/formio/formio.component';
import { FuseModule } from '../@fuse/fuse.module';
import { FuseSharedModule } from '../@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '../@fuse/components';
import { fuseConfig } from '../app/fuse-config/index';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '../app/layout/layout.module';
import { PagesModule } from '../app/main/pages/pages.module';
import { ApiService } from './services/api.service';
import { TrainingListComponent } from './report/training-list/training-list.component';
import { CreateSiteComponent } from './sites/create-site/create-site.component';
import { AuditFormScheduledComponent } from './sites/audit-form-scheduled/audit-form-scheduled.component';
import { TrainingChapterComponent } from './training/trainings/training-chapter/training-chapter.component';
import { ChapterViewComponent } from './training/trainings/training-chapter/chapter-view/chapter-view.component';
import { StaffEditComponent } from './user-staff/staff-edit/staff-edit.component';
import { CustomerEditComponent } from './user-staff/customer-edit/customer-edit.component';
import { ChapterEditComponent } from './training/trainings/training-chapter/chapter-edit/chapter-edit.component';
import { TrainingQuestionComponent } from './training/trainings/training-question/training-question.component';
import { ViewAuditReportComponent } from './report/audit-report/view-audit-report/view-audit-report.component';
import { ViewActionPlanComponent } from './report/action-plan/view-action-plan/view-action-plan.component';
// import { StaffDeleteComponent } from './user-staff/staff/staff-delete.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DepartmentEditComponent } from './user-staff/department-edit/department-edit.component';
import { EditSiteComponent } from './sites/edit-site/edit-site.component';
import { CustomerDetailsComponent } from './user-staff/customer-details/customer-details.component';
import { IncidentFormComponent } from './users/incident-form/incident-form.component';
import { CreateIncidentFormComponent } from './users/create-incident-form/create-incident-form.component';
import { AuditFormEditComponent } from './users/audit-form-edit/audit-form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    AuditFormComponent,
    DragDropFormComponent,
    CategoriesComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    SitesComponent,
    FeedbackQusComponent,
    StaffComponent,
    CustomersComponent,
    DepartmentComponent,
    StaffCreateComponent,
    TrainingsCategoryComponent,
    TrainingsComponent,
    InductionContentsComponent,
    CreateTrainingCateComponent,
    CreateTrainingsComponent,
    DepartmentCreateComponent,
    AuditReportComponent,
    ActionPlanComponent,
    AuditFormTableComponent,
    CustomerCrateComponent,
    FormioComponent,
    TrainingListComponent,
    CreateSiteComponent,
    AuditFormScheduledComponent,
    TrainingChapterComponent,
    ChapterViewComponent,
    StaffEditComponent,
    CustomerEditComponent,
    ChapterEditComponent,
    TrainingQuestionComponent,
    ViewAuditReportComponent,
    ViewActionPlanComponent,
    DepartmentEditComponent,
    EditSiteComponent,
    CustomerDetailsComponent,
    IncidentFormComponent,
    CreateIncidentFormComponent,
    AuditFormEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
    TranslateModule.forRoot(),
    LayoutModule,
    HttpClientModule,
    PagesModule,
    NgxSpinnerModule,
    ConfirmDialogModule,
    ButtonModule,
    AngularEditorModule
  ],
  entryComponents: [EditCategoryComponent, DeleteCategoryComponent, CreateTrainingCateComponent, CreateTrainingsComponent],
  providers: [ApiService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
