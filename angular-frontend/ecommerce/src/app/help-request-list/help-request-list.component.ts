import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HelpRequestServiceService } from '../help-request-service.service'
import { HelpRequest } from '../help-request';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal.component';


@Component({
  selector: 'app-help-request-list',
  templateUrl: './help-request-list.component.html',
  styleUrls: ['./help-request-list.component.css']
})
export class HelpRequestListComponent implements OnInit {

  helpRequests ?: HelpRequest[];
  modalOpen: boolean = false;

  constructor(private router: Router,
   private helpRequestServiceService: HelpRequestServiceService,
   private dialog: MatDialog){

  }  
  
  ngOnInit(): void {
    this.getHelperRequests();
  }

  getHelperRequests() {
   /*  this.helpRequestServiceService.getTasksList().subscribe(data => {
      this.helpRequest = data;
      console.log("helpRequest: ",this.helpRequest)
    }); */

    this.helpRequests = this.helpRequestServiceService.getTasksListMock(); 
    console.log("helpRequest: ",this.helpRequests)
  }

  openModal(card: any) {
    this.modalOpen = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      data: card,
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.modalOpen = false;
    });
  }
}