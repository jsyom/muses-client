import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { StickyModule } from './sticky/sticky.module';
import { TreeMenuModule } from './tree-menu/tree-menu.module';

const CAPSULE_DESIGN_MODULES = [
  DropdownModule,
  NavbarModule,
  SidebarModule,
  StickyModule,
  TreeMenuModule
];

@NgModule({
  imports: CAPSULE_DESIGN_MODULES,
  exports: CAPSULE_DESIGN_MODULES
})
export class CapsuleDesignModule { }
