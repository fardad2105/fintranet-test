import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInfoComponent } from './components/form-info/form-info.component';
import { SummaryInfosComponent } from './components/summary-infos/summary-infos.component';
import { UploadDocComponent } from './components/upload-doc/upload-doc.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'file', pathMatch: 'full'},
      { path: 'file', component: UploadDocComponent},
      { path: 'form-info', component: FormInfoComponent },
      { path: 'user-infos', component: UserListsComponent },
      { path: 'summary', component: SummaryInfosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
