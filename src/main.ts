import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global validator PIPE
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // ← CRUCIAL
      transformOptions: {
        enableImplicitConversion: true, // ← convierte tipos (ej: string → UUID)
        exposeUnsetFields: false, // ← opcional, para que no incluya undefined en la serialización
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
