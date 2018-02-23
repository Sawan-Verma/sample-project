import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RepairsContractListComponent } from './contractor/repairs/repairs-contract-list/repairs-contract-list.component';
import { OperativeDetailsViewComponent } from './contractor/operatives/operative-details-view/operative-details-view.component';

/**timesheet */
import { AddEntryTimesheetComponent } from './contractor/timesheet/timesheet-entry-form/timesheet-entry-form.component';
import { TimesheetManagementComponent } from './contractor/timesheet/timesheet-management/timesheet-management.component';
import { JobNumberSearchComponent } from './contractor/timesheet/job-number-search/job-number-search.component';
import { TimesheetDetailComponent } from './contractor/timesheet/timesheet-detail/timesheet-detail.component';
import { NominalCodeSearchComponent } from './contractor/timesheet/nominal-code-search/nominal-code-search.component';
import { ViewEntryTimesheetComponent } from './contractor/timesheet/timesheet-entry-view/timesheet-entry-view.component';
import { TimesheetDefaultListComponent } from './contractor/timesheet/timesheet-default-list/timesheet-default-list.component';
import { TimesheetDefaultCreateComponent } from './contractor/timesheet/timesheet-default-create/timesheet-default-create.component';
// tslint:disable-next-line:max-line-length
import { TimesheetHistoryOperativeViewComponent } from './contractor/timesheet/timesheet-history-operative-view/timesheet-history-operative-view.component';
import { TimesheetHistoryAnnualViewComponent } from './contractor/timesheet/timesheet-history-annual-view/timesheet-history-annual-view.component';
import { TimesheetAssignDefaultComponent } from './contractor/timesheet/timesheet-assign-default/timesheet-assign-default.component';
/**
 * Opertaives Component Dependency
 */
import { BulkRatesUpdateComponent } from './contractor/operatives/bulk-rates-update/bulk-rates-update.component';
import { OperativeListSearchComponent } from './contractor/operatives/operative-list-search/operative-list-search.component';
import { OperativeAccordionComponent } from './contractor/operatives/operative-accordion/operative-accordion.component';
import { OperativeDetailsFormComponent } from './contractor/operatives/operative-details-form/operative-details-form.component';
import { OperativeTradeCrudComponent } from './contractor/operatives/operative-trade-crud/operative-trade-crud.component';
import { OperativeHandheldFormComponent } from './contractor/operatives/operative-handheld-form/operative-handheld-form.component';
import { OperativeHandheldViewComponent } from './contractor/operatives/operative-handheld-view/operative-handheld-view.component';
import { OperativeRateCrudComponent } from './contractor/operatives/operative-rate-crud/operative-rate-crud.component';
import { MissingTimesheetListComponent } from './contractor/timesheet/missing-timesheet-list/missing-timesheet-list.component';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { OneHousingDashboardComponent } from './core/one-housing-dashboard/one-housing-dashboard.component';
import { ManageComponentsListComponent } from './assets/manage-components/manage-components-list/manage-components-list.component';
import { ServiceSorListComponent } from './assets/manage-components/service-sor-list/service-sor-list.component';

export const routes: Routes = [
  {
    path: 'repair',
    component: RepairsContractListComponent
  },
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: OneHousingDashboardComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'Operatives',
    component: OperativeListSearchComponent,
    data: { title: 'Operatives' }
  },
  {
    path: 'timesheetdefault',
    component: TimesheetDefaultListComponent,
    data: { title: 'timesheetdefault' }
  },
  {
    path: 'CreateTimesheetDefault',
    component: TimesheetDefaultCreateComponent,
  },
  {
    path: 'TimesheetAssignDefault',
    component: TimesheetAssignDefaultComponent,
  },
  {
    path: 'BulkRatesUpdate',
    component: BulkRatesUpdateComponent,
    data: { title: 'BulkRatesUpdate' }
  },
  {
    path: 'OperativeAccordian',
    component: OperativeAccordionComponent,
    children: [
      { path: 'OperativeDetails', component: OperativeDetailsFormComponent },
      { path: 'ViewOperative', component: OperativeDetailsViewComponent },
      { path: 'ratesAndDefaults', component: OperativeRateCrudComponent },
      { path: 'tradesAndSkills', component: OperativeTradeCrudComponent },
      { path: 'handHeld', component: OperativeHandheldFormComponent },
      { path: 'ViewHandHeld', component: OperativeHandheldViewComponent },
      { path: '', redirectTo: 'ViewOperative', pathMatch: 'full' }
    ]
  },
  { path: 'timesheetManagement', component: TimesheetManagementComponent },
  { path: 'timesheetManagement/addEntryTimesheet', component: AddEntryTimesheetComponent },
  {
    path: 'JobNumberSearch',
    component: JobNumberSearchComponent
  },

  {
    path: 'timesheetDetail',
    component: TimesheetDetailComponent,
    pathMatch: 'full'
  },

  {
    path: 'missingTimsheets',
    component: MissingTimesheetListComponent
  },
  { path: 'timesheet-entry-form', component: AddEntryTimesheetComponent },
  { path: 'NominalCodeSearch', component: NominalCodeSearchComponent },
  { path: 'timesheetManagement/ViewEntryTimesheet', component: ViewEntryTimesheetComponent },
  { path: 'timesheetManagement/OperativeViewHistory', component: TimesheetHistoryOperativeViewComponent },
  { path: 'timesheetManagement/AnnualViewHistory', component: TimesheetHistoryAnnualViewComponent },
  { path: 'timesheetdefault/CreateTimesheetDefault', component: TimesheetDefaultCreateComponent },
  { path: 'timesheetdefault/TimesheetAssignDefault', component: TimesheetAssignDefaultComponent },
  { path: 'ManageComponent', component: ManageComponentsListComponent },
  { path: 'ServiceSOR', component: ServiceSorListComponent }
];






