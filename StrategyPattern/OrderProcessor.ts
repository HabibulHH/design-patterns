// Strategy interface
interface DiscountStrategy {
    apply(amount: number): number;
}

// Concrete strategies
class NoDiscount implements DiscountStrategy {
    apply(amount: number) {
        return amount;
    }
}

class CouponDiscount implements DiscountStrategy {
    constructor(private code: string, private percent: number) { }

    apply(amount: number) {
        console.log(`Applied coupon: ${this.code}`);
        return amount * (1 - this.percent / 100);
    }


}

class PremiumDiscount implements DiscountStrategy {
    apply(amount: number) {
        console.log('Premium member: 20% off');
        // business logic...
        return amount * 0.8;
    }
}

class FlashSaleDiscount implements DiscountStrategy {
    apply(amount: number) {
        console.log('⚡ Flash sale: 30% off');
        return amount * 0.7;
    }
}
class LoyaltyDiscount implements DiscountStrategy {
    constructor(private points: number) { }

    apply(amount: number) {
        const discount = Math.min(this.points * 0.1, amount * 0.5); // max 50% off
        console.log(`Loyalty points: $${discount} off`);
        return amount - discount;
    }
}


// Context with state
// dev harry
class OrderProcessor {
    private discount: DiscountStrategy;
    private cart: Cart;
    private user: User;
    private orderHistory: string[] = []; // 👈 maintains history
    constructor(cart: Cart, user: User) {
        this.cart = cart;
        this.user = user;
        this.discount = new NoDiscount(); // default
    }

    calculateTotal(): number {
        const subtotal = this.cart.getTotal();
        const total = this.discount.apply(subtotal);
        return total;
    }

    // Runtime strategy changes based on events
    applyCoupon(code: string, percent: number) {
        this.discount = new CouponDiscount(code, percent);
        this.orderHistory.push(`Coupon ${code} applied`);
    }

    applyFlashSale() {
        this.discount = new FlashSaleDiscount();
        this.orderHistory.push('Flash sale activated');
    }

    redeemPoints(points: number) {
        this.discount = new LoyaltyDiscount(points);
        this.orderHistory.push(`Redeemed ${points} points`);
    }

    removeCoupon() {
        this.discount = new NoDiscount();
        this.orderHistory.push('Coupon removed');
    }


    upgradeToPremium() {
        // user upgrades to premium mid-checkout
        this.discount = new PremiumDiscount();
        this.orderHistory.push('Upgraded to premium');
    }


}


class Cart {
    items: Array<{ name: string, price: number }> = [];

    addItem(name: string, price: number) {
        this.items.push({ name, price });
    }

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

class User {
    constructor(public id: string, public isPremium: boolean) { }
}

const cart = new Cart();
cart.addItem('Laptop', 1000);
cart.addItem('Mouse', 50);

// api for checkout process
{
    // dev john 
    const user = new User('user123', false);
    const order = new OrderProcessor(cart, user);
    console.log('Initial:', order.calculateTotal()); // 1050
    order.applyCoupon('SAVE10', 10);
    console.log('With coupon:', order.calculateTotal()); // 945

    // User upgrades to premium mid-checkout
    order.upgradeToPremium();
    console.log('Premium upgrade:', order.calculateTotal()); // 840

    // Flash sale starts while user is checking out
    order.applyFlashSale();
    console.log('Flash sale:', order.calculateTotal()); // 735

    order.redeemPoints(500);
    console.log('Loyalty points:', order.calculateTotal()); // 1000
    console.log('Initial:', order.calculateTotal()); // 1050
}

