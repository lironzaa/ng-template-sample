import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typescript-template',
  templateUrl: './typescript-template.component.html',
  styleUrls: ['./typescript-template.component.scss']
})
export class TypescriptTemplateComponent implements OnInit, AfterViewInit  {
  @ViewChild('typescriptTemplate') typescriptTemplate!: TemplateRef<any>;


  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
