import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInfos } from '../data/UserInfo.data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  users: User[] = UserInfos;

  SummaryInformation = {
    imageUplead: '',
    personalInformation: {
      days: '',
      datework: '',
      degree: '',
      source: ''
    },
    selectedUser: {
      firstname: '',
      lastname: '',
      nationalCode: '',
      age: '',
      country: ''
    }
  };


  getSummaryInformation() {
    return this.SummaryInformation;
  }

  setSummaryInformation(summaryInformation: any) {
    this.SummaryInformation = summaryInformation;
  }

  complete() {
    localStorage.setItem('SummaryInfo', JSON.stringify(this.getSummaryInformation()))
  }


  getUsersList() {
    return this.users;
  }
}
