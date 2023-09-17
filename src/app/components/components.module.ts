import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponentComponent, 
    FooterComponentComponent, 
    MenuComponent,
    PaginatorComponent
  ],
  exports: [
    HeaderComponentComponent,
    FooterComponentComponent, 
    MenuComponent,
    PaginatorComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class SharedModule {}

