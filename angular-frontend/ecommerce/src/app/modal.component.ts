import { Component, Inject, ElementRef, ViewChild, OnInit,AfterViewInit   } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements  OnInit, AfterViewInit  {
    @ViewChild('modalContainer', { static: true }) modalContainer!: ElementRef;
  
    helpRequest: any;
    constructor(private dialogRef: MatDialogRef<ModalComponent>,
         @Inject(MAT_DIALOG_DATA) public data: any) {
        this.helpRequest = data;
    }

    ngOnInit(): void {}
  
    ngAfterViewInit(): void {
        setTimeout(() => {
        const modalContainer = this.modalContainer?.nativeElement;
        console.log("modalContainer:", modalContainer)
      if (modalContainer) {
        modalContainer.style.opacity = '1'; // Altera a opacidade para 1 no momento correto
      }
    }, 0);
      }
  
      onBackButtonClick(): void {
        this.dialogRef.close();
      }

      onSaveButtonClick(): void {
        this.dialogRef.close();
      }
  }
  