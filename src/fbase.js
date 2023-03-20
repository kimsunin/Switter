// import * as firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeR6_V7rBCfDgjvOigk3QlbrkvbA37sN0",
  authDomain: "twitter-a31c3.firebaseapp.com",
  projectId: "twitter-a31c3",
  storageBucket: "twitter-a31c3.appspot.com",
  messagingSenderId: "374772666764",
  appId: "1:374772666764:web:e5aee5b9e82c628f9286a9",
};

initializeApp(firebaseConfig);

export const authService = getAuth();
