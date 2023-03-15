import { Transfer } from './../models/transfer.models';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

private transferList: any[];
private url = 'http://localhost:3000/transfers';

constructor(private httpClient: HttpClient) {
  this.transferList = [];
}

get transfers(){
  return this.transferList;
}

allTransfer(): Observable<Transfer[]>{
  return this.httpClient.get<Transfer[]>(this.url)
}

newTransfer(transfer: Transfer): Observable<Transfer> {
    this.dateTransfer(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer)
}

private dateTransfer(transfer: any){
  transfer.data = new Date();
}

}
