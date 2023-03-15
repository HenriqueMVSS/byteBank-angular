import { TransferService } from '../services/transfer.service';
import { Transfer } from '../models/transfer.models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  constructor(private service: TransferService, private router: Router) {}

  value: number = 0;
  destiny: number = 0;

  transfer() {
    let valueIssue: Transfer = {
      value: this.value,
      destiny: this.destiny,
    };
    this.service.newTransfer( valueIssue).subscribe(
      () => {
        this.router.navigateByUrl('extract');
      },
      (error) => console.error(error)
    );
  }
}
