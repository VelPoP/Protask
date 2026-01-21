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

// Listen for background messages from Firebase
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/906/906334.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Generic notification display for local tests
self.addEventListener('message', (event) => {
    if (event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/906/906334.png'
        });
    }
});