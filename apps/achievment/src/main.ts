import { NestFactory } from '@nestjs/core';
import { AchievmentModule } from './achievment.module';

async function bootstrap() {
  const app = await NestFactory.create(AchievmentModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
