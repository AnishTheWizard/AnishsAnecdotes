import initializeApp from "firebase/app";
import getAnalytics from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDPwtGoiP07NSlVbzevjXQSTpYJbYk3z9s",
    authDomain: "seniorenglishblog.firebaseapp.com",
    databaseURL: "https://seniorenglishblog-default-rtdb.firebaseio.com",
    projectId: "seniorenglishblog",
    storageBucket: "seniorenglishblog.appspot.com",
    messagingSenderId: "932384815735",
    appId: "1:932384815735:web:a71faed09d6b5be61e2472",
    measurementId: "G-C7XHJZEJ68"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database =
