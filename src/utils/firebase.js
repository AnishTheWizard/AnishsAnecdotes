import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "seniorenglishblog.firebaseapp.com",
    databaseURL: "https://seniorenglishblog-default-rtdb.firebaseio.com",
    projectId: "seniorenglishblog",
    storageBucket: "seniorenglishblog.appspot.com",
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

