import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from '../../services/data-manager.service';

interface Degree {
  name: string,
  code: string
}

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
})
export class FormInfoComponent implements OnInit {
  personalInformation: any;
  selectImage!: any;

  submitted: boolean = false;
  degrees!: Degree[];

  today = new Date();
  nextFiveDay = new Date(this.today.setDate(this.today.getDate() + 5))

  constructor(
    public dataService: DataManagerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initDegree();
    this.personalInformation =
      this.dataService.getSummaryInformation().personalInformation;
  }

  initDegree() {
    this.degrees = [
      {name: 'primary', code: 'pm'},
      {name: 'bacholer', code: 'bc'},
      {name: 'Master', code: 'ms'},
      {name: 'Doctor', code: 'dc'}
    ]
  }

  nextPage() {
    if (
      this.personalInformation.days &&
      this.personalInformation.datework &&
      this.personalInformation.degree &&
      this.personalInformation.source
    ) {
      this.dataService.SummaryInformation.personalInformation =
        this.personalInformation;
      this.router.navigate(['user-infos']);
    }

    this.submitted = true;
  }

  prevPage() {
    this.router.navigate(['file']);
  }
}
