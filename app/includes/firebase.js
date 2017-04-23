import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyCc2hACf10ZXc2Qjrq26FN79dRuMRRO6H8",
            authDomain: "heartstrong-5bd4e.firebaseapp.com",
            databaseURL: "https://heartstrong-5bd4e.firebaseio.com",
            storageBucket: "heartstrong-5bd4e.appspot.com"
        });
    }

}

module.exports = Firebase;