import { NestFactory } from '@nestjs/core';
import { QuizModule } from './quiz.module';

async function bootstrap() {
  const app = await NestFactory.create(QuizModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
