import {Body, Controller, Post} from '@nestjs/common';
import {PaymentService} from "./payment.service";
import {Stripe} from "stripe";

@Controller('payment')
export class PaymentController {
    constructor(public readonly paymentService: PaymentService) {
    }

    @Post('')
    sendPayment(@Body() paymentMethod: Stripe) {
        return this.paymentService.sendPayment(paymentMethod)
    }
}