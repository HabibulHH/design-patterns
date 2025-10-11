import { PaymentFactory } from "./PaymentFactory";

// Usage Example
class CheckoutService {
  async processOrder(orderId: string, amount: number, gateway: 'stripe' | 'paypal' | 'razorpay' | 'bkash') {
    console.log(`\n🛒 Processing Order: ${orderId}`);
    console.log(`   Amount: $${amount}`);
    console.log(`   Gateway: ${gateway}\n`);

    // Factory creates the right payment gateway
    const payment = PaymentFactory.create(gateway);

    // Process payment
    const result = await payment.processPayment(amount, 'USD');

    if (result.success) {
      console.log(`✅ ${result.message}`);
      console.log(`   Transaction ID: ${result.transactionId}\n`);
    } else {
      console.log(`❌ Payment failed: ${result.message}\n`);
    }

    return result;
  }

  async refundOrder(transactionId: string, amount: number, gateway: 'stripe' | 'paypal' | 'razorpay' | 'bkash') {
    console.log(`\n💸 Processing Refund`);
    console.log(`   Original Transaction: ${transactionId}`);
    console.log(`   Amount: $${amount}\n`);

    const payment = PaymentFactory.create(gateway);
    const result = await payment.refund(transactionId, amount);

    if (result.success) {
      console.log(`✅ ${result.message}\n`);
    }

    return result;
  }
}

export { CheckoutService };