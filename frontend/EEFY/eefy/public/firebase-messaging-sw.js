importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const config = {
    apiKey: 'AIzaSyC7pFu4H7svcrh0RJ_UvKxqrUGZEjJLGXY',
    authDomain: 'eefy-f2294.firebaseapp.com',
    projectId: 'eefy-f2294',
    storageBucket: 'eefy-f2294.appspot.com',
    messagingSenderId: '433063675765',
    appId: '1:433063675765:web:751ff0f18e47b9892d353c',
    measurementId: 'G-V0R74XV218',
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // const notificationTitle = payload.notification.title;
    // const notificationOptions = {
    //     body: payload.notification.body,
    //     icon: '/icon-192x192.png',
    // };
    const dataTitle = payload.data.title;
    const datacontent = {
        content: payload.data.content,
        icon: '/icon-192x192.png',
    };

    self.registration.showNotification(dataTitle, datacontent);
});

// onBackgroundMessage(messaging, payload => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/icon-192x192.png',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
