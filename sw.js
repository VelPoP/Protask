importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

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

// Handle Background Messages [cite: 109]
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/906/906334.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});