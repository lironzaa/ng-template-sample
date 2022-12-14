import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AngularTemplateComponent } from "../templates/angular-template/angular-template.component";
import { TypescriptTemplateComponent } from "../templates/typescript-template/typescript-template.component";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: [ './parent-component.component.scss' ]
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  course = 'TypeScript';
  totalEstimate = 10;
  templatesList: any = [];
  selectedTemplate: any;

  // @ViewChild('angularTemplate') angularTemplate!: TemplateRef<any>;
  // @ViewChild('typescriptTemplate') typescriptTemplate!: TemplateRef<any>;
  @ViewChild(AngularTemplateComponent) angularTemplateComponent!: AngularTemplateComponent;
  @ViewChild(TypescriptTemplateComponent) typescriptTemplateComponent!: TypescriptTemplateComponent;

  ngOnInit() {
    console.log(this.angularTemplateComponent);
    // console.log(this.selectedTemplate);
    // this.templatesList = [
    //   this.angularTemplate,
    //   this.typescriptTemplate,
    // ];
    // console.log(this.templatesList);
    // this.selectedTemplate = this.templatesList[0];
    // console.log(this.selectedTemplate);
    // console.log(this.dynamicTemplate);
  }

  ngAfterViewInit() {
    console.log(this.angularTemplateComponent || this.typescriptTemplateComponent);
    console.log(this.angularTemplateComponent);
    console.log(this.typescriptTemplateComponent);
    this.selectedTemplate = this.angularTemplateComponent || this.typescriptTemplateComponent;
  }
}
