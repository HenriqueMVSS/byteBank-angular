import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ExtractComponent } from './extract/extract.component';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extract', pathMatch: 'full'},
  {path: 'extract', component: ExtractComponent},
  {path: 'new-transfer', component:NewTransferComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
