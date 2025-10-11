import { CheckoutService } from './PaymentService';

// Demo
async function main() {
  const checkout = new CheckoutService();

  // Different customers using different payment gateways
  await checkout.processOrder('ORD-001', 99.99, 'stripe');
  await checkout.processOrder('ORD-002', 149.50, 'paypal');
  await checkout.processOrder('ORD-003', 2500, 'razorpay');
  await checkout.processOrder('ORD-004', 1500, 'bkash');

  // Refund example
  await checkout.refundOrder('stripe_1234567890', 99.99, 'stripe');
}

main();