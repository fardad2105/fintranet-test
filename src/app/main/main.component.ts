import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Steps } from 'primeng/steps';
import { Subscription } from 'rxjs';
import { DataManagerService } from './services/data-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  items!: MenuItem[];

  @ViewChild('stepper', { static: true }) stepper!: Steps;
  public activeIndex = 1;

  subscription: Subscription | undefined;

  constructor(
    private messageService: MessageService,
    private dataManageService: DataManagerService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Upload Doc',
        routerLink: 'file',
      },
      {
        label: 'Infos',
        routerLink: 'form-info',
      },
      {
        label: 'User-Informations',
        routerLink: 'user-infos',
      },
      {
        label: 'Summary',
        routerLink: 'summary',
      },
    ];
    // this.subscription = this.dataManageService.paymentComplete$.subscribe(
    //   (personalInformation) => {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Order submitted',
    //       detail:
    //         'Dear, ' +
    //         personalInformation.firstname +
    //         ' ' +
    //         personalInformation.lastname +
    //         ' your order completed.',
    //     });
    //   }
    // );
  }

  public stepperChanged(ste: any) {
    this.activeIndex += 1;
    console.log(1);
  }

  public goToStep(step: number) {
    this.stepper.activeIndexChange.emit(step);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
