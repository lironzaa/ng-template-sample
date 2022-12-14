import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptTemplateComponent } from './typescript-template.component';

describe('TypescriptTemplateComponent', () => {
  let component: TypescriptTemplateComponent;
  let fixture: ComponentFixture<TypescriptTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
