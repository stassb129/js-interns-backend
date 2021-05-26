import {Injectable} from '@nestjs/common';
import {InjectStripe} from "nestjs-stripe";
import Stripe from "stripe";

@Injectable()
export class PaymentService {
    public constructor(@InjectStripe() private readonly stripeClient: Stripe) {
    }

    async sendPayment(paymentMethod): Promise<any> {
        const payment = await this.stripeClient.paymentIntents.create({
            payment_method: paymentMethod.id,
            amount: paymentMethod.amount,
            currency: 'USD',
            description: paymentMethod.metadata.description,
            confirm: true
        })

        return payment.status
    }

}
