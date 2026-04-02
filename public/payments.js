async function initiatePayment() {
  // Call Firebase Cloud Function to create Razorpay order
  const response = await fetch("/createOrder", { method: "POST" });
  const orderData = await response.json();

  const options = {
    key: "rzp_test_SYcndNThCPiTiA",
    amount: orderData.amount,
    currency: "INR",
    name: "PayZip",
    description: "Office Expense Payment",
    order_id: orderData.id,
    handler: function (response) {
      alert("Payment successful: " + response.razorpay_payment_id);
    },
    prefill: {
      email: "mazhar@istos.in",
      contact: "9739868668"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

