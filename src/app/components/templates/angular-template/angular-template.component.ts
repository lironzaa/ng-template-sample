import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angular-template',
  templateUrl: './angular-template.component.html',
  styleUrls: [ './angular-template.component.scss' ]
})
export class AngularTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('angularTemplate') angularTemplate!: TemplateRef<any>;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
