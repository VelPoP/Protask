// 1. Import Firebase scripts for the Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 2. Initialize Firebase in the Service Worker
// Use the SAME config object you put in index.html
firebase.initializeApp({
    apiKey: "AIzaSyB1u-t7oQLWDg333noZcmtscbOo8fftPYE",
    authDomain: "protask-97ac8.firebaseapp.com",
    projectId: "protask-97ac8",
    storageBucket: "protask-97ac8.firebasestorage.app",
    messagingSenderId: "18921043127",
    appId: "1:18921043127:web:7780ee8e5b7ce919684932"
});

const messaging = firebase.messaging();

// 3. Your existing Install/Activate logic 
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// 4. Handle Background Messages
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906334.png' // Matches your manifest icon [cite: 3]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});