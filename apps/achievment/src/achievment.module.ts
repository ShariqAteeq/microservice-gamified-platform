import { Module } from '@nestjs/common';
import { AchievmentController } from './achievment.controller';
import { AchievmentService } from './achievment.service';

@Module({
  imports: [],
  controllers: [AchievmentController],
  providers: [AchievmentService],
})
export class AchievmentModule {}
