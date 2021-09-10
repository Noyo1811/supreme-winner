
const firebaseConfig = {
      apiKey: "AIzaSyAyaRLV0DWQBWtlh9SnXndBIpLT0pcuLYU",
      authDomain: "chatbot-596b1.firebaseapp.com",
      databaseURL: "https://chatbot-596b1-default-rtdb.firebaseio.com",
      projectId: "chatbot-596b1",
      storageBucket: "chatbot-596b1.appspot.com",
      messagingSenderId: "251796850535",
      appId: "1:251796850535:web:cd0652b06ad12bfe8d51c2",
      measurementId: "G-BZD86K9Y67"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
