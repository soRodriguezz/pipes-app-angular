import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar local de app en las fechas
import localeEs from '@angular/common/locales/es-CL';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    //uso de manera global
    { provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
