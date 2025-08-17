import { Controller, Get } from '@nestjs/common';
import { AchievmentService } from './achievment.service';

@Controller()
export class AchievmentController {
  constructor(private readonly achievmentService: AchievmentService) {}

  @Get()
  getHello(): string {
    return this.achievmentService.getHello();
  }
}
