interface PaymentResult {
  success: boolean;
  transactionId: string;
  message: string;
}

interface IPaymentGateway {
  processPayment(amount: number, currency: string): Promise<PaymentResult>;
  refund(transactionId: string, amount: number): Promise<PaymentResult>;
}

// Concrete implementations
class StripePayment implements IPaymentGateway {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    console.log(`💳 Processing ${amount} ${currency} via Stripe...`);
    
    // Simulate API call
    return {
      success: true,
      transactionId: `stripe_${Date.now()}`,
      message: 'Payment processed successfully via Stripe'
    };
  }

  async refund(transactionId: string, amount: number): Promise<PaymentResult> {
    console.log(`↩️ Refunding ${amount} on Stripe (${transactionId})`);
    return {
      success: true,
      transactionId: `refund_${Date.now()}`,
      message: 'Refund processed via Stripe'
    };
  }
}

class PayPalPayment implements IPaymentGateway {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    console.log(`💰 Processing ${amount} ${currency} via PayPal...`);
    
    return {
      success: true,
      transactionId: `paypal_${Date.now()}`,
      message: 'Payment processed successfully via PayPal'
    };
  }

  async refund(transactionId: string, amount: number): Promise<PaymentResult> {
    console.log(`↩️ Refunding ${amount} on PayPal (${transactionId})`);
    return {
      success: true,
      transactionId: `refund_${Date.now()}`,
      message: 'Refund processed via PayPal'
    };
  }
}

class RazorpayPayment implements IPaymentGateway {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    console.log(`🇮🇳 Processing ${amount} ${currency} via Razorpay...`);
    
    return {
      success: true,
      transactionId: `razorpay_${Date.now()}`,
      message: 'Payment processed successfully via Razorpay'
    };
  }

  async refund(transactionId: string, amount: number): Promise<PaymentResult> {
    console.log(`↩️ Refunding ${amount} on Razorpay (${transactionId})`);
    return {
      success: true,
      transactionId: `refund_${Date.now()}`,
      message: 'Refund processed via Razorpay'
    };
  }
}

class BkashPayment implements IPaymentGateway {
  async processPayment(amount: number, currency: string): Promise<PaymentResult> {
    console.log(`🇧🇩 Processing ${amount} ${currency} via bKash...`);
    
    return {
      success: true,
      transactionId: `bkash_${Date.now()}`,
      message: 'Payment processed successfully via bKash'
    };
  }

  async refund(transactionId: string, amount: number): Promise<PaymentResult> {
    console.log(`↩️ Refunding ${amount} on bKash (${transactionId})`);
    return {
      success: true,
      transactionId: `refund_${Date.now()}`,
      message: 'Refund processed via bKash'
    };
  }
}

// The Factory
class PaymentFactory {
  static create(gateway: 'stripe' | 'paypal' | 'razorpay' | 'bkash'): IPaymentGateway {
    switch (gateway) {
      case 'stripe':
        return new StripePayment();
      case 'paypal':
        return new PayPalPayment();
      case 'razorpay':
        return new RazorpayPayment();
      case 'bkash':
        return new BkashPayment();
      default:
        throw new Error(`Unknown payment gateway: ${gateway}`);
    }
  }
}
export { PaymentFactory, IPaymentGateway, PaymentResult };