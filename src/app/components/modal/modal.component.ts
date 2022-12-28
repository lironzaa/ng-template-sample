import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('content') content!: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
