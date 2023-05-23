import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbButtonModule, NbMenuModule, NbUserModule, NbToastrModule, NbGlobalPositionStrategy, NbGlobalPhysicalPosition, NbDialogModule, NbDatepickerModule, NbTimepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './shared/header/header.component';
import { NbAuthModule } from '@nebular/auth';
import { NbFirebasePasswordStrategy, NbFirebaseAuthModule } from '@nebular/firebase-auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SharedModule } from './shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbFirebaseAuthModule,
    NbAuthModule.forRoot({
      forms: {
        login: {
          strategy: 'password',
          rememberMe: true,
          socialLinks: [],
        },
        register: {
          strategy: 'password',
          terms: true,
          socialLinks: [],
        },
        logout: {
          strategy: 'password',
        },
        requestPassword: {
          strategy: 'password',
          socialLinks: [],
        },
        resetPassword: {
          strategy: 'password',
          socialLinks: [],
        },
        validation: {
          password: {
            required: true,
            minLength: 6,
            maxLength: 50,
          },
          email: {
            required: true,
          },
        },
      },
      strategies: [
        NbFirebasePasswordStrategy.setup({
          name: 'password',
          login: {
            redirect: {
              success: '/',
            },
          },
          register: {
            redirect: {
              success: '/auth',
            },
          },
          logout: {
            redirect: {
              success: '/',
            },
          },
          requestPassword: {
            redirect: {
              success: '/auth',
            },
          },
          resetPassword: {
            redirect: {
              success: '/auth',
            },
          },
        }),
      ],
    }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot({
      closeOnBackdropClick: true,
    }),
    NbToastrModule.forRoot({
      duration: 2000,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
    }),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbIconModule,
    NbButtonModule,
    NbUserModule,
    NbEvaIconsModule,
    SharedModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
