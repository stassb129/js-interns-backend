import {Module} from '@nestjs/common';
import {PaymentService} from './payment.service';
import {PaymentController} from './payment.controller';
import {StripeModule} from "nestjs-stripe";

@Module({
    imports: [
        StripeModule.forRoot({
            apiKey: 'sk_test_51IuvNqEo4u7eYIVbMXPPwv51irKejYGriyzaJi8tNLkDc4S3TeQRvVI6KfFobPi0aSOUvvCAA0ftEtmcbgj3Jjz300xZvsIESm',
            // @ts-ignore
            apiVersion: '2020-03-02',
        }),
    ],
    providers: [PaymentService],
    controllers: [PaymentController]
})
export class PaymentModule {
}
