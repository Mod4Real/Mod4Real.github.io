<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDrnG5diZMy0jJmhrWoGmZANaaaG43eeyA",
    authDomain: "mox4real-16bb4.firebaseapp.com",
    projectId: "mox4real-16bb4",
    storageBucket: "mox4real-16bb4.firebasestorage.app",
    messagingSenderId: "281854667825",
    appId: "1:281854667825:web:412d71cf89900a6cb43910",
    measurementId: "G-Y3NTLNP4Z3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Export Firebase services
  export const auth = getAuth(app);
  export const db = getFirestore(app);
</script>
