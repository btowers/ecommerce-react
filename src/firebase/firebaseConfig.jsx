import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDADpDzh-RuTuQf9LI3Gcm1TQ7vlXaIwTw',
  authDomain: 'ecommerce-towers.firebaseapp.com',
  projectId: 'ecommerce-towers',
  storageBucket: 'ecommerce-towers.appspot.com',
  messagingSenderId: '468944017435',
  appId: '1:468944017435:web:e55cad2a10c38aa2d6c0be',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
