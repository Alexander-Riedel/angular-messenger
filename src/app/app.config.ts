import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

import env from '../environments/env.json';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideFirebaseApp(() =>
        initializeApp(
          {
            projectId: env.FIREBASE_PROJECT_ID,
            appId: env.FIREBASE_APP_ID,
            storageBucket: env.FIREBASE_STORAGE_BUCKET,
            apiKey: env.FIREBASE_API_KEY,
            authDomain: env.FIREBASE_AUTH_DOMAIN,
            messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
          }
        )),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideMessaging(() => getMessaging()),
      provideStorage(() => getStorage()), provideAnimationsAsync()
    ]
};
