import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss'],
})
export class UserListsComponent implements OnInit {
  selectedUser!: User;
  userInfo: any;
  users: User[] = [];
  isSelect = false;
  constructor(private dataService: DataManagerService, private router: Router) {
    this.isRowSelectable = this.isRowSelectable.bind(this);
  }

  ngOnInit(): void {
    this.users = this.dataService.getUsersList();
    this.userInfo = this.dataService.getSummaryInformation().selectedUser;
  }

  onRowSelect(event: any) {
    this.isSelect = true;
    this.userInfo = event.data;
  }

  onRowUnselect(event: any) {
    this.isSelect = false;
  }

  isRowSelectable(event: any) {
    return !this.isOutOfStock(event.data);
  }

  isOutOfStock(data: any) {
    console.log(data);
    return data.inventoryStatus === 'OUTOFSTOCK';
  }

  nextPage() {
    this.dataService.SummaryInformation.selectedUser = this.userInfo;
    this.dataService.complete();
    this.router.navigate(['summary']);
  }

  prevPage() {
    this.router.navigate(['form-info']);
  }
}
