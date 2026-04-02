// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC9WCe-zobgwx9QIK_wb8aDkJ1tcN-x1dA",
  authDomain: "payzip-42993.firebaseapp.com",
  projectId: "payzip-42993",
  storageBucket: "payzip-42993.firebasestorage.app",
  messagingSenderId: "1007138462232",
  appId: "1:1007138462232:web:a404d5a4e4fbea648d816d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Expense form handler
document.getElementById("expenseForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);

  await db.collection("expenses").add({
    description: desc,
    amount: amount,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  alert("Expense added successfully!");
});

