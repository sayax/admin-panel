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
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbButtonModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './shared/header/header.component';
import { NbAuthModule } from '@nebular/auth';
import { NbFirebasePasswordStrategy, NbFirebaseAuthModule } from '@nebular/firebase-auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

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
    NbIconModule,
    NbButtonModule,
    NbEvaIconsModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }