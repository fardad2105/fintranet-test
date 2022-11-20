import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { UploadDocComponent } from './components/upload-doc/upload-doc.component';
import { FormInfoComponent } from './components/form-info/form-info.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { SummaryInfosComponent } from './components/summary-infos/summary-infos.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ImageModule} from 'primeng/image';
import {SplitterModule} from 'primeng/splitter';

@NgModule({
  declarations: [
    MainComponent,
    UploadDocComponent,
    FormInfoComponent,
    UserListsComponent,
    SummaryInfosComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    TabViewModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    ImageModule,
    SplitterModule
  ],
})
export class MainModule {}
