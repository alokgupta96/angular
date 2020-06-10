import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditFormComponent } from './users/audit-form/audit-form.component';
import { DragDropFormComponent } from './users/drag-drop-form/drag-drop-form.component';
import { CategoriesComponent } from './users/categories/categories.component';
import { SitesComponent } from './sites/sites/sites.component';
import { FeedbackQusComponent } from './sites/feedback-qus/feedback-qus.component';
import { StaffComponent } from './user-staff/staff/staff.component';
import { DepartmentComponent } from './user-staff/department/department.component';
import { CustomersComponent } from './user-staff/customers/customers.component';
import { StaffCreateComponent } from './user-staff/staff-create/staff-create.component';
import { TrainingsCategoryComponent } from './training/trainings-category/trainings-category.component';
import { TrainingsComponent } from './training/trainings/trainings.component';
import { InductionContentsComponent } from './training/induction-contents/induction-contents.component';
import { DepartmentCreateComponent } from './user-staff/department-create/department-create.component';
import { AuditReportComponent } from './report/audit-report/audit-report.component';
import { ActionPlanComponent } from './report/action-plan/action-plan.component';
import { AuditFormTableComponent } from './users/audit-form-table/audit-form-table.component';
import { CustomerCrateComponent } from './user-staff/customer-crate/customer-crate.component';
import { LoginModule } from './main/pages/authentication/login/login.module';
import { LoginComponent } from './main/pages/authentication/login/login.component';
import { ForgotPasswordComponent } from './main/pages/authentication/forgot-password/forgot-password.component';
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
import { DepartmentEditComponent } from './user-staff/department-edit/department-edit.component';
import { EditSiteComponent } from './sites/edit-site/edit-site.component';
import { CustomerDetailsComponent } from './user-staff/customer-details/customer-details.component';
import { IncidentFormComponent } from './users/incident-form/incident-form.component';
import { CreateIncidentFormComponent } from './users/create-incident-form/create-incident-form.component';
import { ProfileComponent } from './main/pages/profile/profile.component';
import { AuditFormEditComponent } from './users/audit-form-edit/audit-form-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'audit-form', component: AuditFormComponent},
  { path: 'audit-form-table', component: AuditFormTableComponent},
  { path: 'audit-form-edit', component: AuditFormEditComponent},
  { path: 'incident-form', component: IncidentFormComponent},
  { path: 'create-incident-form', component: CreateIncidentFormComponent},
  { path: 'drag-drop-form', component: DragDropFormComponent},
  { path: 'audit-categories', component: CategoriesComponent},
  { path: 'customer-create', component: CustomerCrateComponent},
  { path: 'customer-details', component: CustomerDetailsComponent},
  { path: 'sites', component: SitesComponent},
  { path: 'edit-site', component: EditSiteComponent},
  { path : 'create-site', component: CreateSiteComponent},
  { path: 'feedback-question', component: FeedbackQusComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'department', component: DepartmentComponent},
  { path: 'department-edit', component: DepartmentEditComponent},
  { path: 'customer', component: CustomersComponent},
  { path: 'customer-edit', component: CustomerEditComponent},
  { path: 'staff-create', component: StaffCreateComponent},
  { path: 'staff-edit', component: StaffEditComponent},
  { path: 'department-create', component: DepartmentCreateComponent},
  { path: 'training-category', component: TrainingsCategoryComponent},
  { path: 'trainings', component: TrainingsComponent},
  { path: 'induction-content', component: InductionContentsComponent},
  { path: 'audit-report', component: AuditReportComponent},
  { path: 'action-plan', component: ActionPlanComponent},
  { path: 'training-list', component: TrainingListComponent},
  { path: 'login', component: LoginComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'audit-form-scheduled', component: AuditFormScheduledComponent},
  { path: 'training-chapter', component: TrainingChapterComponent},
  { path: 'chapter-view', component: ChapterViewComponent},
  { path: 'chapter-edit', component: ChapterEditComponent},
  { path: 'training-question', component: TrainingQuestionComponent},
  { path: 'view-audit-report', component: ViewAuditReportComponent},
  { path: 'view-action-plan', component: ViewActionPlanComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
