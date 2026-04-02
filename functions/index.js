const functions = require("firebase-functions");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_SYcndNThCPiTiA",
  key_secret: "kL6i9yYrrmvmk1akghhj6WMY"
});

// Cloud Function to create Razorpay order
exports.createOrder = functions.https.onRequest(async (req, res) => {
  const options = {
    amount: 50000, // example: Rs. 500.00
    currency: "INR",
    receipt: "receipt#1"
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Webhook to handle payment status
exports.paymentWebhook = functions.https.onRequest((req, res) => {
  const event = req.body;
  console.log("Payment webhook received:", event);

  // TODO: update Firestore with payment status
  res.sendStatus(200);
});

