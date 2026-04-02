// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "payzip.firebaseapp.com",
  projectId: "payzip",
  storageBucket: "payzip.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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

