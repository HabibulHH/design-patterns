// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategies
class CreditCard implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid $${amount} with Credit Card`);
  }
}

class PayPal implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid $${amount} with PayPal`);
  }
}

class CryptoPay implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid $${amount} with Crypto`);
  }
}

//Context
// robi
// Context using Strategy
// Strategy Selector or class selector
class Checkout {
  private strategy: PaymentStrategy; //int || string || boolean

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  // Switch strategy at runtime ⚡
  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number) {
    // business logic....
    this.strategy.pay(amount);
  }

  
}


// Factory Pattern
// class PaymentFactory {
//   static create(type: string): PaymentStrategy {
//     switch(type) {
//       case 'card': return new CreditCard();
//       case 'paypal': return new PayPal();
//       case 'crypto': return new CryptoPay();
//       default: throw new Error('Unknown type');
//     }
//   }
// }

// Usage
// makepayment(){
//}
// "Give me right object"
// const method = PaymentFactory.create("paypal"); // 👈 Runtime decision
// method.pay(150); // Paid $150 with PayPal
// const method2 = PaymentFactory.create("crypto"); // 👈 Runtime decision
// // customPaymentLogic(){}
// method2.pay(250); // Paid $250 with Crypto

// Usage - changing behavior dynamically
// jawad
const checkout = new Checkout(new CreditCard());
checkout.processPayment(100); // Paid $100 with Credit Card

checkout.setStrategy(new PayPal()); // 👈 Runtime switch
checkout.processPayment(200); // Paid $200 with PayPal

checkout.setStrategy(new CryptoPay()); // 👈 Another runtime switch
checkout.processPayment(300); // Paid $300 with Crypto
// Behavior switching at runtime 🎉
// Preserves context/state
// "Change how object behaves"