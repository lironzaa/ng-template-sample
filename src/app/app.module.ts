import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { AngularTemplateComponent } from './components/templates/angular-template/angular-template.component';
import { TypescriptTemplateComponent } from './components/templates/typescript-template/typescript-template.component';
import { ModalComponent } from './components/modal/modal.component';
import { InfoComponent } from './components/info/info.component';
import { ChildModalComponent } from './components/child-modal/child-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    AngularTemplateComponent,
    TypescriptTemplateComponent,
    ModalComponent,
    InfoComponent,
    ChildModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
