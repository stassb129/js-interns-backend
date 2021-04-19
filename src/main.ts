import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('JS interns')
        .setDescription('test project')
        .setVersion('3')
        .addTag('cats')
        .build()

    app.setGlobalPrefix('/api');
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(4000);
}

bootstrap();
