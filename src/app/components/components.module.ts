import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { FormRecetasComponent } from './form-recetas/form-recetas.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponentComponent, 
    FooterComponentComponent, 
    MenuComponent,
    FormRecetasComponent,
    RegisterComponent
  ],
  exports: [
    HeaderComponentComponent,
    FooterComponentComponent, 
    MenuComponent,
    FormRecetasComponent,
    RegisterComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class SharedModule {}

