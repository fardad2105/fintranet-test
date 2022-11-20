import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-summary-infos',
  templateUrl: './summary-infos.component.html',
  styleUrls: ['./summary-infos.component.scss'],
})
export class SummaryInfosComponent implements OnInit {
  summaryInfos: any;
  uploadedImage: any;
  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DataManagerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getFormInfos();
  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustUrl(
      this.uploadedImage!.substring(1, this.uploadedImage!.length - 1)
    );
  }

  getFormInfos() {
    this.summaryInfos = JSON.parse(localStorage.getItem('SummaryInfo')!)
    this.uploadedImage = this.summaryInfos.imageUplead
    console.log(this.summaryInfos);
  }

  nextPage() {
    localStorage.removeItem('SummaryInfo');
    this.router.navigate(['file']);
  }
}
