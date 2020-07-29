import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressFormComponent } from './address-form/address-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddressFormComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
