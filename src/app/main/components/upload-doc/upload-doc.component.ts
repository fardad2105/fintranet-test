import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.scss'],
})
export class UploadDocComponent implements OnInit {
  imgSrc = '../../../../assets/img/placeholder-image.png';
  selectedImage: any = null;
  next = false;
  constructor(
    private router: Router,
    private dataService: DataManagerService
  ) {}

  ngOnInit(): void {}

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
        this.dataService.SummaryInformation.imageUplead = JSON.stringify(
          reader.result
        );
      };

      this.selectedImage = event.target.files[0];

      this.next = true;
    } else {
      this.selectedImage = '../../../../assets/img/placeholder-image.png';
      this.selectedImage = null;
    }
  }

  nextPage() {
    this.router.navigate(['form-info']);
  }
}
