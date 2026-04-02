async function initiatePayment() {
  // Call Firebase Cloud Function to create Razorpay order
  const response = await fetch("/createOrder", { method: "POST" });
  const orderData = await response.json();

  const options = {
    key: "YOUR_RAZORPAY_KEY_ID",
    amount: orderData.amount,
    currency: "INR",
    name: "PayZip",
    description: "Office Expense Payment",
    order_id: orderData.id,
    handler: function (response) {
      alert("Payment successful: " + response.razorpay_payment_id);
    },
    prefill: {
      email: "user@example.com",
      contact: "9999999999"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

