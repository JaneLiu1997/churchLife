import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import locale from '@angular/common/locales/zh-Hant';


import { fontAwesomeIcons } from './icons/font-awesome-icons';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hant',
    },
    DatePipe,
  ],
})
export class ChurchLifeCoreModule {
  constructor(iconLibrary: FaIconLibrary) {
    registerLocaleData(locale);
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}
