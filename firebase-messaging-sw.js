importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// 1. You will paste your personal Config block here in the next step
const firebaseConfig = {
  apiKey: "AIzaSyB1u-t7oQLWDg333noZcmtscbOo8fftPYE",
  authDomain: "protask-97ac8.firebaseapp.com",
  projectId: "protask-97ac8",
  storageBucket: "protask-97ac8.firebasestorage.app",
  messagingSenderId: "18921043127",
  appId: "1:18921043127:web:7780ee8e5b7ce919684932"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// This shows the notification when the app is closed/in background
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906334.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});