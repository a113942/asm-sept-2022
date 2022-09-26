import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingComponent, ListComponent, EntryComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ShoppingComponent],
})
export class ShoppingModule {}
