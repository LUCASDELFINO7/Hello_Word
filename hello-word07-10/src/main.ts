import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  process.env.Tz = '-03:00'
  await app.listen(4000);
}
bootstrap();