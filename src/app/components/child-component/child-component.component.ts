import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: [ './child-component.component.scss' ]
})
export class ChildComponentComponent implements OnInit, AfterViewInit {
  @Input() dynamicTemplate!: TemplateRef<any>;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
