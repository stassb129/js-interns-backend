import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const PORT = process.env.PORT || 4002
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    const config = new DocumentBuilder()
        .setTitle('JS interns')
        .setDescription('docs for app')
        .setVersion('0.0.1')
        .addTag('Locations')
        .build()

    app.setGlobalPrefix('/api');
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    await app.listen(PORT);
    console.log("Server has been started...")
}

bootstrap();
